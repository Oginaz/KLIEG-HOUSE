import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0C10',
        marquee: '#14161D',
        stage: '#1B1E27',
        klieg: '#F2C879',
        kliegdim: '#8A6E33',
        carbon: '#8B8F9B',
        paper: '#F5F3EE',
        velvet: '#7A1F2B',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      letterSpacing: {
        marquee: '0.28em',
      },
      backgroundImage: {
        spotlight:
          'radial-gradient(60% 80% at 50% -10%, rgba(242,200,121,0.20) 0%, rgba(242,200,121,0.05) 35%, rgba(11,12,16,0) 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
