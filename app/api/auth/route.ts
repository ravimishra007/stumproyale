import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import User from '@/models/User';

// Helper function to validate phone number
function validatePhone(phone: string): { isValid: boolean; formattedPhone: string } {
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
    const { phone } = await req.json();

    // Validate phone number
    if (!phone) {
      return NextResponse.json({ 
        success: false,
        message: "Please provide a phone number"
      }, { status: 400 });
    }

    const { isValid, formattedPhone } = validatePhone(phone);
    if (!isValid) {
      return NextResponse.json({ 
        success: false,
        message: "Please provide a valid Indian phone number"
      }, { status: 400 });
    }

    // Connect to database
    await dbConnect();

    try {
      // Create new user with phone number
      await User.create({
        phoneNumber: formattedPhone,
        verificationTime: new Date(),
        message_sent: 'no',
        account_opened: 'no',
        first_deposit_done: 'no'
      });

      return NextResponse.json({ 
        success: true,
        message: "Phone number saved successfully"
      });
    } catch (error: unknown) {
      // Handle duplicate phone number error
      if (error instanceof Error && error.message === 'Phone number already exists') {
        return NextResponse.json({ 
          success: false,
          message: "This phone number is already registered"
        }, { status: 400 });
      }
      throw error;
    }

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ 
      success: false,
      message: "Internal server error"
    }, { status: 500 });
  }
} 