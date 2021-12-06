const fs = require('fs')
require('dotenv').config()

/*
* @param {string} filePath - file path from root of project.
* Example: "/lib/test/input.txt"
*/

function fileReader(filePath) {
    try {
      return fs.readFileSync(process.env.APP_PATH + filePath, 'utf8')
    } catch (err) {
      console.error(err)
    }
} 

module.exports = fileReader;
