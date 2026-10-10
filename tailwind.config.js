/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF9F5',
          100: '#FFF0E6',
          200: '#FEDCC8',
          300: '#FCC4A6',
          400: '#F99E73',
          500: '#F1733E',
          600: '#D9531E',
          700: '#B43B11',
          800: '#8E2D0E',
          900: '#68220C',
        },
        crimson: {
          50: '#FDF2F3',
          100: '#FCE7E8',
          200: '#F8D0D3',
          300: '#F1A9B0',
          400: '#E47581',
          500: '#D24454',
          600: '#B92336',
          700: '#9B192A',
          800: '#831726',
          900: '#6F1724',
          950: '#410810',
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9E7',
          200: '#FDF0C3',
          300: '#FCE294',
          400: '#F9CD58',
          500: '#EDB023',
          600: '#D49213',
          700: '#A96B0F',
          800: '#835012',
          900: '#6A4112',
        },
        leaf: {
          50: '#F2F9F4',
          100: '#E1F3E5',
          500: '#2E7D32',
          600: '#1B5E20',
          700: '#155219',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        tamil: ['"Mukta Malar"', '"Noto Sans Tamil"', 'sans-serif'],
      },
      boxShadow: {
        'soft-peach': '0 10px 30px -10px rgba(241, 115, 62, 0.15)',
        'soft-crimson': '0 12px 35px -10px rgba(131, 23, 38, 0.28)',
        'luxury': '0 20px 40px -15px rgba(111, 23, 36, 0.12), 0 0 20px 0 rgba(237, 176, 35, 0.08)',
      }
    },
  },
  plugins: [],
}
