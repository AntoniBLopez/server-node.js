function iniciar(response) {
    console.log("Manipulador de peticion 'iniciar' fue llamado.");

    exec("find /",
        { timeout: 10000, maxBuffer: 20000*1024 },
        function (err, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(stdout)
        response.end();
    })
}

function subir(response) {
    console.log("Manipulador de peticion 'subir' fue llamado.");

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('Hola subir')
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
