import { db } from '@/lib/db';

export const getUserByEmail = async (email: string) => {
  if (!email) return null;
  
  return db.user.findUnique({
    where: { email },
  }).catch(() => null);
}

export const getUserById = async (id: string) => {
  if (!id) return null;
  
  return db.user.findUnique({
    where: { id },
  }).catch(() => null);
}