const colors = require("tailwindcss/colors");

module.exports = {
        purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
        darkMode: false, // or 'media' or 'class'
        theme: {
                extend: {
                        colors: {
                                warmGray: colors.warmGray,
                                coolGray: colors.coolGray,
                                trueGray: colors.trueGray,
                                gray: colors.gray,
                                amber: colors.amber,
                                orange: colors.orange,
                        },
                        fontFamily: {
                                body: ["Domine"],
                        },
                        spacing: {
                                128: "32rem",
                        },
                },
        },
        variants: {
                extend: { stroke: ["hover", "focus"], fill: ["hover", "focus"] },
        },
        plugins: [],
};
