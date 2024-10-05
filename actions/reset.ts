import { getPasswordResetToken } from './../data/password-reset-token';
"use server"

import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    // TODO: Later we will send a generic message to avoid user enumeration
    return { error: "User not found." };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmail({ email: passwordResetToken.email, token: passwordResetToken.token });

  return { success: "Password reset email sent!" };  
}