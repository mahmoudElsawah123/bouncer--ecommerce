import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor : '#22262A',
        secondary : '#33A0FF',
        whiteTxt : '#C1C8CE'
      },
      container : {
        center : true,
        padding : '1rem'
      },
      spacing : {
        'sm': '15px',
        'md': '30px',
        'lg': '60px',
        'xl': '90px',
        '2xl': '150px',
      },
      screens : {
        sm : '576px',
        md : '768px',
        lg : '992px',
        xl : '1200px',
        '2xl' : '1400px'
      },
      fontSize: {
        'h1': '56px',
        'h2': '48px',
        'h3': '36px',
        'h4': '30px',
        'h5': '24px',
        'h6': '18px',  
      },
    }, 
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
