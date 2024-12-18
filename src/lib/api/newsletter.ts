import { db } from '../db';

export async function subscribeToNewsletter(email: string) {
  return db.newsletter.create({
    data: { email },
  });
}