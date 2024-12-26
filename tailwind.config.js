const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
})