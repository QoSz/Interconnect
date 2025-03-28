module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradient-shift 10s ease infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
} 