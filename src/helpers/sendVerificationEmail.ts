import { resend } from "@/lib/resend";
import VerificationEmail from "@/../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystry message | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email sent",
    };
  } catch (emailError) {
    console.error(" Send Verification Email Error: ", emailError);
    return {
      success: false,
      message: "Unable to send email",
      error: emailError,
    };
  }
}
