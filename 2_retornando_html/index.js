const http = require ('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end ('<h1>hello world, this is my first server with html!</h1>')
})

server.listen(port, () =>{
    console.log(`Servidor on na porta ${port}`)
})