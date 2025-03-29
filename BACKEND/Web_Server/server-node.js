const { log } = require('console')
const http = require('http')
const { prototype } = require('stream')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello")
    }
    else if (req.url == '/ice-tea') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello, have a ice tea, it's really hot")
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end("404 Not Found")
    }
})
server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`);
})