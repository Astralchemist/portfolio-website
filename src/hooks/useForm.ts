import { useState, ChangeEvent, FormEvent } from 'react';

export function useForm<T>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent, onSubmit: (data: T) => void) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    resetForm,
  };
}