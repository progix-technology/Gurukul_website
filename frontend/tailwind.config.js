/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gurukul: {
          maroon: {
            DEFAULT: '#241B15',
            50: '#FAF6ED',
            100: '#F3EAD3',
            500: '#8B4513',
            700: '#3D2B1F',
            800: '#2E221B',
            900: '#241B15',
            950: '#19120E',
          },
          dark: {
            DEFAULT: '#241B15',
            50: '#FAF6ED',
            100: '#F3EAD3',
            800: '#2E221B',
            900: '#241B15',
            950: '#19120E',
          },
          brown: {
            DEFAULT: '#241B15',
            800: '#2E221B',
            900: '#241B15',
            950: '#19120E',
          },
          saffron: {
            DEFAULT: '#E5832E',
            50: '#FDF8F3',
            100: '#FAEEE3',
            200: '#F5DDC6',
            300: '#ECC4A0',
            400: '#E5832E',
            500: '#E5832E',
            600: '#D97724',
            700: '#BF6117',
            800: '#9C4C14',
            900: '#7E3E14',
          },
          cream: {
            DEFAULT: '#F8F4EA',
            50: '#FCFAF5',
            100: '#F8F4EA',
            200: '#F2EBDA',
            300: '#EADEC3',
            400: '#DECCA4',
            500: '#CDB37F',
          },
          gold: {
            DEFAULT: '#C68A32',
            50: '#FAF6ED',
            100: '#F3EAD3',
            200: '#E7D3A7',
            300: '#D9B976',
            400: '#C68A32',
            500: '#B27626',
            600: '#945E1B',
            700: '#734617',
          },
        },
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Noto Serif Devanagari"', 'Georgia', 'serif'],
        heading: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'vedic': '0 10px 30px -5px rgba(36, 27, 21, 0.15), 0 4px 6px -2px rgba(229, 131, 46, 0.08)',
        'vedic-card': '0 4px 15px 0 rgba(36, 27, 21, 0.06), 0 1px 2px 0 rgba(229, 131, 46, 0.05)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
