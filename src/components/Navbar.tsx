import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Request a Quote', href: '/quote' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      {/* Glassmorphism background */}
      <div className="backdrop-blur-md bg-white/10 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-800/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-bold text-xl hover:from-purple-500 hover:to-blue-600 transition-all"
              >
                ConsultHasha
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${
                      location.pathname === item.href
                        ? 'text-purple-400 bg-white/10 dark:bg-gray-800/50'
                        : 'text-gray-200 hover:text-purple-400 hover:bg-white/5 dark:hover:bg-gray-800/30'
                    } px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pl-2 border-l border-white/20 dark:border-gray-800/80">
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/10 dark:bg-gray-900/80 border-t border-white/20 dark:border-gray-800/80">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-purple-400 bg-white/10 dark:bg-gray-800/50'
                      : 'text-gray-200 hover:text-purple-400 hover:bg-white/5 dark:hover:bg-gray-800/30'
                  } block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;