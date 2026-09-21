/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f13',
        surface: '#14161f',
        card: '#1a1d29',
        border: 'rgba(255, 255, 255, 0.1)',
        muted: '#9e9e9e',
        accent: {
          DEFAULT: '#4d44b5',
          hover: '#6157d0',
          light: '#8379f0',
          glow: 'rgba(77, 68, 181, 0.4)',
        },
        cyber: {
          green: '#00df8f',
          purple: '#4d44b5',
          violet: '#7c73e6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
        handwritten: ['Caveat', 'Pacifico', 'cursive'],
      },
      boxShadow: {
        'purple-glow': '0 0 25px rgba(77, 68, 181, 0.4)',
        'purple-glow-lg': '0 0 50px rgba(77, 68, 181, 0.6)',
        'cyber-glow': '0 0 25px rgba(0, 223, 143, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
