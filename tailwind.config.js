/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xsm: {'min': '320'},
      sm: {'min': '640px'},
      md: {'min': '900px'},
      lg: {'min': '1024px'},
      xl: {'min': '1280px'},
      
      xem:{'max': '320px'},
      em: {'max': '640px'},
      ed: {'max': '900px'},
      eg: {'min': '1024px'},
      el: {'min': '1280px'},

      xrm: {'min': '220px', 'max': '420px'},
      rm: {'min': '420px', 'max': '640px'},
      rd: {'min': '640px', 'max': '900px'},
      rg: {'min': '900px', 'max': '1024px'},
      rl: {'min': '1024px', 'max': '1280px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
