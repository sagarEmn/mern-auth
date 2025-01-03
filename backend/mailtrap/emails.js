export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailitrapClient.send({
            from: sendVerificationEmail,
            to: recipient, 
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });

        console.log("Email sent successfully", response);
    } catch(error) {
        console.error(`Error sending verification`, error);

        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await MailtrapClient.send({
            from: sendVerificationEmail,
            to: recipient,
            template_uuid: "...",
            template_variables: {
                company_info_name: "Auth Company",
                name: name,
            },
        });

        console.log("Welcome email sent successfully", response);
    } catch(error) {
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
}