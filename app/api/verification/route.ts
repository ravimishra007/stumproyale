import { NextResponse } from "next/server";
import axios from "axios";
import { FilterQuery, UpdateQuery } from "mongoose";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/User";


export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();

    // Get current time in IST
    const istTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Connect to MongoDB
    await dbConnect();

    // Create or update user in MongoDB
    const filter: FilterQuery<typeof User> = { phoneNumber };
    const update: UpdateQuery<typeof User> = {
      $set: {
        phoneNumber,
        verificationTime: new Date(),
        message_sent: "no",
        account_opened: "no",
        first_deposit_done: "no",
      },
    };

    const user = await User.findOneAndUpdate(filter, update, {
      upsert: true,
      new: true,
      runValidators: true,
    }).lean();

    if (!user) {
      return NextResponse.json({
        success: false,
        error: "Failed to create/update user",
      });
    }

    const SENDINBLUE_API_KEY = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

    const apiKey = SENDINBLUE_API_KEY;

    const emailData = {
      sender: {
        name: "TopPlaying11",
        email: "notifications@TopPlaying11.com",
      },
      to: [
        {
          email: "teamtejas7@gmail.com",
          name: "Team Admin",
        },
        {
          email: "ag@sensedigital.in",
          name: "Sense Digital",
        },
      ],
      subject: "New Phone Number Verification Alert - TopPlaying11",
      htmlContent: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4a1e9e;">Phone Number Verification Notification</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Verification Status:</strong> Successfully Verified</p>
          <p><strong>Verification Time (IST):</strong> ${istTime}</p>
          <p><strong>Message Sent:</strong> ${user.message_sent}</p>
          <p><strong>Account Opened:</strong> ${user.account_opened}</p>
          <p><strong>First Deposit:</strong> ${user.first_deposit_done}</p>
        </div>
        <p style="color: #666;">This is an automated notification from the TopPlaying11 verification system.</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 14px; color: #888;">
          Note: This email is for monitoring purposes only. Please do not reply to this email.
        </p>
      </div>
      `,
    };

    // Send email notification
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      emailData,
      {
        headers: {
          accept: "application/json",
          "api-key": apiKey,
          "content-type": "application/json",
        },
      }
    );

    // Update message_sent status after successful email sending
    await User.findByIdAndUpdate(
      user._id,
      { $set: { message_sent: "yes" } },
      { new: true }
    ).lean();

    return NextResponse.json({ success: true });
    
  } catch (error: unknown) {
    console.error("Verification error:", error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to process verification",
    });
  }
}
