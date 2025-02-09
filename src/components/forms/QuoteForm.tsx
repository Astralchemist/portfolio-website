import { useState } from 'react';
import { FormInput } from '../FormInput';
import { useSubmit } from '../../hooks/useSubmit';
import { submitQuoteRequest } from '../../lib/api/quote';
import { services } from '../../data/services';
import type { QuoteFormData } from '../../types';
import React from 'react';

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const { submit, isLoading, error } = useSubmit({
    onSubmit: submitQuoteRequest,
    onSuccess: () => {
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      alert('Quote request submitted successfully!');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          label="Company Name"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <FormInput
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="md:col-span-2">
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Service Required *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          placeholder="Please describe your project and requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
      >
        {isLoading ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
}