/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        'richBlack': '#0D1321',
        'raisinBlack': '#1B1825',
        'seaShell': '#F4E5E1',
        'imessage1': '#003166',
        'imessage2': '#000c19',
        'imessage': '#0062cc',
        
        // Section colors - Main theme colors for each section
        section: {
          home: '#F5F5F5',
          education: '#F5F5F5',
          experience: '#F5F5F5',
          applications: '#F5F5F5',
          projects: '#F5F5F5',
          publications: '#F5F5F5',
          skills: '#F5F5F5',
        },
        // section: {
        //   home: '#F5F5F5',
        //   education: '#F0F8FF',
        //   experience: '#F5FFFA',
        //   applications: '#F0FFF0',
        //   projects: '#F8F4FF',
        //   publications: '#FFF0F5',
        //   skills: '#FDF5E6',
        // },
        // section: {
        //   home: '#F5F5F5',
        //   education: '#F0F8FF',
        //   experience: '#F0FFF0',
        //   applications: '#F5FFFA',
        //   projects: '#F8F4FF',
        //   publications: '#FFF0F5',
        //   skills: '#FFF8DC',
        // },

        // section: {
        //   home: '#8BCDF9',        // Light blue
        //   education: '#BAF2BB',   // Light green
        //   experience: '#A8E6CF', // Mint green
        //   applications: '#F2BAC9', // Pink
        //   projects: '#D4B5F2',    // Purple
        //   publications: '#C5CAE9', // Lavender
        //   skills: '#F2E2BA',      // Beige/Cream
        // },
        
        // Company/Organization colors
        company: {
          yabla: {
            primary: '#F6822B',   // Orange
          },
          fermilab: {
            primary: '#004C97',   // Blue
          },
          depauw: {
            primary: '#FFC72C',   // Yellow
          },
        },
        // company: {
        //   yabla: {
        //     primary: '#F6822B',   // Orange
        //     dark: '#C85F1F',      // Darker orange
        //   },
        //   fermilab: {
        //     primary: '#004C97',   // Blue
        //     dark: '#003A75',      // Darker blue
        //   },
        //   depauw: {
        //     primary: '#F2C75C',   // Yellow
        //     dark: '#B8943F',      // Darker yellow
        //   },
        // },
        
        // University colors
        // university: {
        //   uiuc: '#C5CAE9',        // Orange
        //   depauw: '#C5CAE9',      // Gold
        // },
        university: {
          uiuc: '#FF5F05',        // Orange
          depauw: '#FFC72C', 
          // depauw: '#EFBF04',      // Gold
        },
      },
      fontFamily: {
        'text': ['"Jost"', 'sans']
      },
      padding: {
        '18': '20rem',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
