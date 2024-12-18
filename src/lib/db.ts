// Temporary mock database implementation
const mockDb = {
  contact: {
    create: async (data: any) => {
      console.log('Contact form submission:', data);
      return Promise.resolve({ ...data, id: Date.now() });
    },
  },
  quote: {
    create: async (data: any) => {
      console.log('Quote request submission:', data);
      return Promise.resolve({ ...data, id: Date.now() });
    },
  },
  newsletter: {
    create: async (data: any) => {
      console.log('Newsletter subscription:', data);
      return Promise.resolve({ ...data, id: Date.now() });
    },
  },
};

export const db = mockDb;