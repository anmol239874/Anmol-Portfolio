const fs = require('fs');
const pdfParse = require('pdf-parse');

(async () => {
  const file = 'D:\\RESUME\\Anmol_Resume.pdf';
  try {
    const data = await pdfParse(file);
    console.log(data.text.slice(0, 20000));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
