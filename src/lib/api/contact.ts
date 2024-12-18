import { db } from '../db';
import type { ContactFormData } from '../../types';

export async function submitContactForm(data: ContactFormData) {
  return db.contact.create({
    data,
  });
}