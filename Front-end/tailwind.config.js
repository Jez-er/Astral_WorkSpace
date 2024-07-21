/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: 'class',
  theme: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'black': '#252525',
          'gray': {
            '200': '#DBDBDB',
            '500': '#757575'
          },
          'main': '#00E1AB',
          'bg': '#DAEDEA',
          'red': '#f83030',
          'green': '#88fa2a'
      },
      fontFamily: {
        Mont: ["Montserrat", 'sans-serif']
      },
      fontSize: {
        mini: '0.6rem',
        xs: '0.75rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',

      },
      extend: {
          spacing: {
              '45': '45%',
              '53%': '53%', 
              '57%': '57%'
          },
          keyframes: {
              'modal-in': {
                  from: {opacity: 0},
                  to: {opacity: 1}
              },
              'modal-out': {
                  from: {opacity: 1},
                  to: { opacity: 0}
              },
              'notification-in': {
                  from: { marginBottom: '-50px'},
                  to: {marginBottom: '40px'}
              },
              'notification-out': {
                  from: {marginBottom: '40px'},
                  to: { marginBottom: '-50px'}
              }
          },
          animation: {
              'modal-in': 'modal-in 0.2s ease-out forwards',
              'modal-out': 'modal-out 0.2s ease-out forwards',
              'notification-in': 'notification-in 0.8s ease-out forwards',
              'notification-out': 'notification-out 0.8s ease-out forwards',
          }
        },
  },
  plugins: [],
}