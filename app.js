const path = require("path") //path is a module (pre-defined)

console.log(path.resolve('./utlis.js')) // resolve - converts relative path to absolute path

console.log(path.relative('../','./utlis.js') ) // gives a path from A to B

console.log(path.extname('./utils.js')) // tells the extension of the file

console.log(path.dirname('/temp/utils2.js')) // tells the parent directory

console.log(__dirname) // gives the name of directory we are working on

console.log(path.join(__dirname, 'utils.js')) 