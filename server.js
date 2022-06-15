const http = require('http');
const url = require('url')

function start (route, handle) {
    const onRequest = (request, response) => {
        const pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");

        route(pathname, handle, response)
    }
    const server = http.createServer(onRequest)

    server.listen(8885)
    console.log('Servidor iniciado, escuchando en localhost:8885')
}

exports.start = start;