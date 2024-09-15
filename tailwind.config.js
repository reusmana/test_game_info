/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          1: "#111827",
          2: "#1F2937",
          3: "#333333",
          4: "#374151",
        },
        white: {
          1: "#F9FAFB",
        },
        grey: {
          1: "#DDDEDF",
          2: "#CCCCCC",
          3: "#F3F4F6",
          4: "#F3F4F5",
          5: "#828282",
        },
      },
    },
  },
  plugins: [],
};
