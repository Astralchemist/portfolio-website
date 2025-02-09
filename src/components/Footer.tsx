import { Github, Mail, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg">ConsultHasha</h3>
          <p className="text-gray-400 text-sm">
            Transform your vision with expert consultation and innovative solutions.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About', 'Services', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-gray-400 text-sm">
            <p>K Ave</p>
            <p>Suite 402</p>
            <p>Nairobi, NRB 00100</p>
            <p>consulthasha@gmail.com</p>
            <p>support@consulthasha.info</p>
            <p>+2547012345678</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-400 text-sm">
              Business Hours:
              <br />
              Weekdays: 9:00 AM - 5:00 PM
              <br />
              Weekends: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
