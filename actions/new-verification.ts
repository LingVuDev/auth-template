"use server";

import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { getVerificationToken } from '@/data/verification-token';

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationToken(token);

  if (!existingToken) {
    return { error: "Token does not exists!"};
  }

  const hasExpired = new Date() > existingToken.expires;

  if (hasExpired) {
    return { error: "Token has expired!"};
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!"};
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    }
  });

  return { success: "Email verified!" };
}