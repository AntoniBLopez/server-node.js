const http = require('http');
const url = require('url')

function start (route, handle) {
    const onRequest = (request, response) => {
        let postData = ''
        const pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida.");

        request.setEncoding("utf8");

        request.addListener("data", function(chunk) {
            // funcion llamada cuando un nuevo trozo (chunk)
            // de informacion (data) es recibido.
            postData += chunk
            console.log(`Received chunk POST: ${chunk} .`)
        });
        request.addListener("end", function() {
            // funcion llamada cuando todos los trozos (chunks)
            // de informacion (data) han sido recibidos.
            route(pathname, handle, response, postData)
        });
    }
    const server = http.createServer(onRequest)

    server.listen(8885)
    console.log('Servidor iniciado, escuchando en localhost:8885')
}

exports.start = start;