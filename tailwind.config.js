import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./vendor/wireui/wireui/src/*.php",
        "./vendor/wireui/wireui/ts/**/*.ts",
        "./vendor/wireui/wireui/src/View/**/*.php",
        "./vendor/wireui/wireui/src/WireUi/**/*.php",
        "./vendor/wireui/wireui/src/resources/**/*.blade.php",
    ],

    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.gray,
                positive: colors.emerald,
                negative: colors.red,
                warning: colors.amber,
                info: colors.blue
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    presets: [
        require("./vendor/wireui/wireui/tailwind.config.js")
    ],

    plugins: [forms],
};