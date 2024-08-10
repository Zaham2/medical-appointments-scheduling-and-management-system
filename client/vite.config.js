import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
    https: {
      key: fs.readFileSync(path.join(__dirname, "../localhost-key.pem")),
      cert: fs.readFileSync(path.join(__dirname, "../localhost.pem")),
    }
  },
});
