/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [ require( "nativewind/preset" ) ],
  theme: {
    extend: {},
  },
  plugins: [],
};





// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     // For NativeWind
//     "./node_modules/nativewind/dist/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };