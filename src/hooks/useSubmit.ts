import { useState } from 'react';

interface SubmitOptions<T> {
  onSubmit: (data: T) => Promise<any>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useSubmit<T>({ onSubmit, onSuccess, onError }: SubmitOptions<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (data: T) => {
    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(data);
      onSuccess?.();
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Something went wrong');
      setError(error.message);
      onError?.(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, error };
}