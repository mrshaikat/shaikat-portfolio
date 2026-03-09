/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Calibri', 'sans-serif'],
        body: ['Calibri', 'sans-serif'],
        mono: ['Calibri', 'sans-serif'],
      },
      colors: {
        bg: '#080a0e',
        surface: '#0f1218',
        card: '#131720',
        subtle: '#1e2330',
        accent: '#4fffb0',
        accent2: '#00cfff',
        accent3: '#b57bff',
        muted: '#636880',
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'glow-drift': 'glow-drift 8s ease-in-out infinite alternate',
        'glow-drift-r': 'glow-drift 10s ease-in-out infinite alternate-reverse',
        'fade-up': 'fade-up 0.8s both',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        'glow-drift': {
          from: { transform: 'translate(0,0)' },
          to: { transform: 'translate(30px,30px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
