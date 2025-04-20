import { NextResponse } from 'next/server';
import axios from 'axios';

// Helper function to make MSG91 API calls
async function callMsg91Api(url: string, method: 'GET' | 'POST' = 'GET', data: Record<string, unknown> | null = null) {
  try {
    const response = await axios({
      method,
      url,
      ...(data && { data }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return { success: true, data: response.data };
  } catch (error: unknown) {
    console.error('MSG91 API Error:', error);
    return { 
      success: false, 
      error: (error as { response?: { data: unknown } }).response?.data || 'Failed to communicate with MSG91' 
    };
  }
}

// Helper function to validate and format phone number
function validateAndFormatPhone(phone: string): { isValid: boolean; formattedPhone: string } {
  // Remove any non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Check if it's a valid Indian phone number (10 digits with optional +91 prefix)
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  const isValid = phoneRegex.test(phone);

  // If the number already has +91, use it as is, otherwise add it
  const formattedPhone = phone.startsWith('+91') ? phone : `+91${cleanPhone}`;

  return { isValid, formattedPhone };
}

export async function POST(req: Request) {
  try {
    const { phone, action, otp } = await req.json();

    // Validate phone number
    if (!phone) {
      return NextResponse.json({ 
        success: false,
        message: "Please provide a phone number"
      }, { status: 400 });
    }

    const { isValid, formattedPhone } = validateAndFormatPhone(phone);
    if (!isValid) {
      return NextResponse.json({ 
        success: false,
        message: "Please provide a valid Indian phone number"
      }, { status: 400 });
    }

    switch (action) {
      case 'send': {
        const url = `https://control.msg91.com/api/v5/otp?template_id=66882244d6fc05732a2ce1f3&mobile=${formattedPhone}&authkey=425757ANUNcNeSsyx668822a0P1&realTimeResponse=1`;
        
        const result = await callMsg91Api(url, 'POST', {
          name: "Dear"
        });

        if (result.success) {
          console.log('Send OTP Response:', result.data);
          return NextResponse.json({ 
            success: true,
            message: "OTP sent successfully",
            ...result.data
          });
        } else {
          console.log('Send OTP Error:', result.error);
          return NextResponse.json({ 
            success: false,
            message: "Failed to send OTP",
            error: result.error
          }, { status: 400 });
        }
      }

      case 'resend': {
        const url = `https://control.msg91.com/api/v5/otp/retry?authkey=425757ANUNcNeSsyx668822a0P1&retrytype=text&mobile=${formattedPhone}`;
        
        const result = await callMsg91Api(url);
        console.log('Resend OTP Response:', result.data);

        if (result.success) {
          // Check for specific error messages in the response
          if (result.data.type === 'error' && result.data.message === 'OTP already verified') {
            return NextResponse.json({ 
              success: false,
              message: "Phone number already verified",
              errorType: 'ALREADY_VERIFIED'
            }, { status: 400 });
          }

          return NextResponse.json({ 
            success: true,
            message: "OTP resent successfully",
            ...result.data
          });
        } else {
          console.log('Resend OTP Error:', result.error);
          return NextResponse.json({ 
            success: false,
            message: typeof result.error === 'object' && result.error !== null && 'message' in result.error 
              ? (result.error as { message: string }).message 
              : "Failed to resend OTP",
            errorType: 'RESEND_FAILED',
            error: result.error
          }, { status: 400 });
        }
      }

      case 'verify': {
        if (!otp || !/^\d{4}$/.test(otp)) {
          return NextResponse.json({ 
            success: false,
            message: "Please provide a valid 4-digit OTP",
            errorType: 'INVALID_OTP'
          }, { status: 400 });
        }

        const url = `https://control.msg91.com/api/v5/otp/verify?otp=${otp}&mobile=${formattedPhone}&authkey=425757ANUNcNeSsyx668822a0P1`;
        
        const result = await callMsg91Api(url);
        console.log('Verify OTP Response:', result);

        if (result.success && result.data.type === 'success') {
          return NextResponse.json({ 
            success: true,
            message: "OTP verified successfully",
            token: "dummy_token", // Replace with actual JWT token
            user: {
              phone: formattedPhone,
              // Add other user details from your database
            }
          });
        } else {
          const errorMessage = 
            (typeof result.data === 'object' && result.data !== null && 'message' in result.data 
              ? (result.data as { message: string }).message 
              : '') || 
            (typeof result.error === 'object' && result.error !== null && 'message' in result.error 
              ? (result.error as { message: string }).message 
              : '');
          
          let responseMessage = "OTP verification failed";
          let errorType = 'VERIFICATION_FAILED';

          if (errorMessage?.includes('already verified')) {
            responseMessage = "Phone number already verified";
            errorType = 'ALREADY_VERIFIED';
          } else if (errorMessage?.includes('invalid')) {
            responseMessage = "Invalid OTP provided";
            errorType = 'INVALID_OTP';
          }

          console.log('Verify OTP Error:', result.error);
          return NextResponse.json({ 
            success: false,
            message: responseMessage,
            errorType,
            error: result.error
          }, { status: 400 });
        }
      }

      default:
        return NextResponse.json({ 
          success: false,
          message: "Invalid action"
        }, { status: 400 });
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ 
      success: false,
      message: "Internal server error"
    }, { status: 500 });
  }
} 