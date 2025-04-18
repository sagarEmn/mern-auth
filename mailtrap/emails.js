import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "VERIFY YOUR EMAIL",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Verification Code Email sent successfully", response);
    console.log("Verification code: ", verificationToken);
  } catch (error) {
    console.error(`Error sending verification email`, error);

    throw new Error(`Error sending verification email: ${email}`);
  }
};
