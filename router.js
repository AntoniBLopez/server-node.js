function route(pathname, handle, response) {
    console.log("A punto de rutear una peticion para " + pathname);

    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response)
    } else {
        console.log('No se ha encontrado ningún manipulador (handler) para ' + pathname)

        response.writeHead(404, {'Content-Type': 'text/html'})
        response.write('ERROR 404, No Found')
        response.end();
    }
}

module.exports = route;