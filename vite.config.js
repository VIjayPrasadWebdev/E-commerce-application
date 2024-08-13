// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "Products.html"),
        singleproduct: resolve(__dirname, "SingleProduct.html"),
        about: resolve(__dirname, "About.html"),
      },
    },
  },
});
