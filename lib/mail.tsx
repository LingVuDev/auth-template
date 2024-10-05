import VerifyEmail from '@/emails/verify-email';
import ResetPassword from '@/emails/reset-password';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async ({email, token} :{email: string; token: string }) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`;

  const res = await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: 'Reset your password',
    react: <ResetPassword verificationLink={resetLink} />
  });
}

export const sendVerificationEmail = async ({email, token} :{email: string; token: string }) => {
  const confirmationLink = `http://localhost:3000/auth/verify-email?token=${token}`;

  const res = await resend.emails.send({
    from: process.env.EMAIL_FROM as string,
    to: email,
    subject: 'Verify your email',
    react: <VerifyEmail verificationLink={confirmationLink} />
  });
}