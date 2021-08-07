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
                                144: "36rem",
                        },
                        animation: {
                                jumping2s: "jumping 10s linear infinite",
                                scalepoint: "scalepoint 5s linear infinite",
                        },
                        keyframes: {
                                jumping: {
                                        "0%, 4%,100%": { transform: "translateY(0)" },
                                        "2%": { transform: "translateY(-15px)" },
                                        "1%, 3%": { transform: "translateY(-25px)" },
                                },
                                scalepoint: {
                                        "0,4%,100%": { transform: "scale(1)" },
                                        "2%": { transform: "scale(1.1)" },
                                },
                        },
                },
        },
        variants: {
                extend: { stroke: ["hover", "focus"], fill: ["hover", "focus"] },
        },
        plugins: [],
};
