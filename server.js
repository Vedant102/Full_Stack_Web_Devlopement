const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    //console.log(request) //url, headers, method
    const markup= fs.readFileSync(path.resolve('./index.html'))
    response.write(markup)
    response.end()
})


server.listen(3000, () => {
    console.log(`Server listening at PORT: ${3000}`)
})