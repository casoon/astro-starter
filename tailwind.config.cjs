module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        screens: {
            sm: "540px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
            "2xl": "1320px",
        },
        container: {
            center: true,
            padding: "16px",
        },
        fontSize: {
            sm: '0.8rem',
            base: '1.1rem',
            xl: '2.8rem',
            '2xl': '3.763rem',
            '3xl': '4.753rem',
            '4xl': '5.891rem',
            '5xl': '6.672rem',
        },
        extend: {
            colors: {
                "primary": "var(--primary-color)",
                secondary: "var(--secondary-color)",
                black: "#212b36",
                dark: "#090E34",
                "dark-700": "#090e34b3",
                "body-color": "#637381",
                warning: "#FBBF24"
            },
            boxShadow: {
                input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
                pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
                "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
                testimonial: "0px 60px 120px -20px #EBEFFD",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};