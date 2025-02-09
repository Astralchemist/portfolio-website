module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Polyfill the `process` object for the client-side
      config.node = {
        ...config.node,
        process: 'mock', // Mock process object for browser environment
      };
    }
    return config;
  },
};
