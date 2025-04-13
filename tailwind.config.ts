import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: '0 0% 0%', // Black
        input: '0 0% 0%', // Black
        ring: '240 89.9% 53.7%', // UHN 3F59EB
        background: '0 0% 0%', // Black
        foreground: '0 0% 100%', // White for contrast
        primary: {
          DEFAULT: '240 89.9% 53.7%', // UHN 3F59EB
          foreground: '0 0% 100%' // White for contrast
        },
        secondary: {
          DEFAULT: '0 0% 20%', // Dark gray
          foreground: '0 0% 100%'
        },
        destructive: {
          DEFAULT: '0 84.2% 60.2%',
          foreground: '0 0% 98%'
        },
        muted: {
          DEFAULT: '0 0% 15%', // Almost black
          foreground: '0 0% 70%'
        },
        accent: {
          DEFAULT: '240 89.9% 53.7%', // UHN 3F59EB
          foreground: '0 0% 100%'
        },
        uhn: {
          bg: '#000000', // Black
          card: '#000000', // Black
          text: '#FFFFFF', // White
          'text-secondary': '#B0B0B0', // Light gray
          accent: '#3F59EB', // UHN 3F59EB
          border: '#333333', // Dark gray
          primary: '#3F59EB', // UHN 3F59EB
          'active-bg': '#3F59EB', // UHN 3F59EB
          'active-text': 'white'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        'card-slide': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'card-slide': 'card-slide 0.3s ease-out'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
