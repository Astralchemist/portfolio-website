import { useState } from 'react';
import { FormInput } from '../FormInput';
import { useSubmit } from '../../hooks/useSubmit';
import { submitContactForm } from '../../lib/api/contact';
import type { ContactFormData } from '../../types';
import React from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { submit, isLoading, error } = useSubmit({
    onSubmit: submitContactForm,
    onSuccess: () => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-md text-red-500">
          {error}
        </div>
      )}
      
      <FormInput
        label="Full Name"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <FormInput
        label="Email Address"
        id="email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <FormInput
        label="Subject"
        id="subject"
        name="subject"
        required
        value={formData.subject}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}