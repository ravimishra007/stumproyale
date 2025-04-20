

export const sendVerificationEmail = async (phoneNumber: string) => {
  try {
    const response = await fetch('/api/verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || 'Failed to send verification email');
    }

    console.log("Verification email sent successfully");
    return data;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
}; 