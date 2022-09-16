const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Store": path.resolve(__dirname, "src/store"),
    },
  },
};
