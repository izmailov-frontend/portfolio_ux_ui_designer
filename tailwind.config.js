/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width:{
        widthlogo:'102px'
      },
      fontWeight:{
        'fw-500': 500,
        '400':400
      },
      fontFamily:{
        'ff-bt': ['Mulish', 'sans-serif'],
        'unbounded': ['Unbounded', 'sans-serif']
      },
      fontSize:{
        'fz-18': '18px',
        'fz-48': '48px',
        '36px':'36px',
        '18px': '18px',
        '28px': '28px',
      },
      borderRadius : {
        'br-20': '20px',
      },
      colors: {
        hover: '#BCFD4C',
        default: '#E2E8F0',
        active: '#ACF038',
        state: '#CDFF77',
        gray: '#4A5568',
        grayOutline: '#A6A6A6',
        defaultOutline: '#718096',
        linkNavDef: '#EDF2F7',
        linkNavActive: '#BCFD4C',
        linkNavHover: '#EFF7E1',
        linkNavDisable: '#E2E8F0',
        colorH1:'#EDF2F7',
        h2:'#F7FAFC',
        chips: '#DCF0BA',
        'gray-300': '#CBD5E0',
        '#DCF0BAE5':'#DCF0BAE5'
      },
    },
  },
  plugins: [],
}

