// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,php}', './public/**/*.html'], // sesuaikan dengan struktur kamu
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
    },
  },
  plugins: [],
};
