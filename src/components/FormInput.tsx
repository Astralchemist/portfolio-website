import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function FormInput({ label, required, ...props }: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        {label} {required && '*'}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}