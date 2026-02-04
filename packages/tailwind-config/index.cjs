/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['variant', '&:is(.dark:not(.dark-mode-disabled) *)'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
        signature: ['var(--font-signature)'],
        noto: ['var(--font-noto)'],
      },
      zIndex: {
        9999: '9999',
      },
      aspectRatio: {
        'signature-pad': '16 / 7',
      },
      colors: {
        border: 'hsl(var(--border))',
        'field-border': 'hsl(var(--field-border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
        },
        /* Brand blue for navigation, secondary buttons, status */
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          dark: 'hsl(var(--brand-dark))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'field-card': {
          DEFAULT: 'hsl(var(--field-card))',
          border: 'hsl(var(--field-card-border))',
          foreground: 'hsl(var(--field-card-foreground))',
        },
        widget: {
          DEFAULT: 'hsl(var(--widget))',
          foreground: 'hsl(var(--widget-foreground))',
        },
        /* DokuHR Brand Colors */
        dokuhr: {
          DEFAULT: '#1F4E78',
          50: '#E8F0F6',
          100: '#D1E1ED',
          200: '#A3C3DB',
          300: '#75A5C9',
          400: '#4787B7',
          500: '#2B6A9A',
          600: '#1F4E78',
          700: '#193F61',
          800: '#152F4D',
          900: '#0F2139',
          950: '#0A1525',
        },
        'dokuhr-accent': {
          DEFAULT: '#FF6B35',
          50: '#FFF5F0',
          100: '#FFEBE0',
          200: '#FFD7C2',
          300: '#FFC3A3',
          400: '#FFAF85',
          500: '#FF8C61',
          600: '#FF6B35',
          700: '#E54D15',
          800: '#B83D10',
          900: '#8A2E0C',
          950: '#5C1F08',
        },
        /* Legacy documenso alias for compatibility */
        documenso: {
          DEFAULT: '#1F4E78',
          50: '#E8F0F6',
          100: '#D1E1ED',
          200: '#A3C3DB',
          300: '#75A5C9',
          400: '#4787B7',
          500: '#2B6A9A',
          600: '#1F4E78',
          700: '#193F61',
          800: '#152F4D',
          900: '#0F2139',
          950: '#0A1525',
        },
        /* Warm background tones matching DokuHR landing page */
        dawn: {
          DEFAULT: '#F5F1E8',
          50: '#FDFBF7',
          100: '#FAF8F3',
          200: '#F5F1E8',
          300: '#EBE5D6',
          400: '#E0D8C4',
          500: '#D5CBB2',
          600: '#C4B799',
          700: '#A89D7F',
          800: '#8C8366',
          900: '#706A52',
          950: '#3D3A2D',
        },
        /* Blue tones aligned with DokuHR primary */
        water: {
          DEFAULT: '#D1E1ED',
          50: '#F3F7FA',
          100: '#E8F0F6',
          200: '#D1E1ED',
          300: '#A3C3DB',
          400: '#75A5C9',
          500: '#4787B7',
          600: '#2B6A9A',
          700: '#1F4E78',
          800: '#193F61',
          900: '#152F4D',
          950: '#0A1525',
        },
        recipient: {
          green: 'hsl(var(--recipient-green))',
          blue: 'hsl(var(--recipient-blue))',
          purple: 'hsl(var(--recipient-purple))',
          orange: 'hsl(var(--recipient-orange))',
          yellow: 'hsl(var(--recipient-yellow))',
          pink: 'hsl(var(--recipient-pink))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        DEFAULT: 'calc(var(--radius) - 3px)',
        '2xl': 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 2px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
        print: { raw: 'print' },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
