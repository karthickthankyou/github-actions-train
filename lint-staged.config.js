module.exports = {
  '*.{ts,tsx,js,jsx,json,css}': (filenames) => [
    'npm run check-types',
    'npm run check-format ',
    'npm run lint',
  ],
}
