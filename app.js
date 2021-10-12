const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants")
const fs = require("fs") // fs (file system) is a module (pre-defined)

fs.readFile('./text.txt', 'utf8' ,(error,data) =>{ //return error or the data(in the form of buffer (raw data)) 
  //utf8 convert buffer to string
  if (error)  
    console.log(error)
  else
    console.log(data /*toString()*/ ) // this convert buffer to string
}
)
console.log('im a random log')
// fs.readFileSync('./text.txt', 'utf8')  // makes the task synchronous

 
fs.writeFile('./text.txt', "new stuff", (error) =>{ //overwrites the file
  if (error) console.log(error)  
})