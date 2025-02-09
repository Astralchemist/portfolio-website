import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useSubmit } from '../../hooks/useSubmit';
import { subscribeToNewsletter } from '../../lib/api/newsletter';
import React from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  
  const { submit, isLoading } = useSubmit({
    onSubmit: (email: string) => subscribeToNewsletter(email),
    onSuccess: () => {
      setEmail('');
      alert('Successfully subscribed to newsletter!');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          <Mail className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
}