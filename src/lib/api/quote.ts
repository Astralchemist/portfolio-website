import { db } from '../db';
import type { QuoteFormData } from '../../types';

export async function submitQuoteRequest(data: QuoteFormData) {
  return db.quote.create({
    data,
  });
}