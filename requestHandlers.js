const querystring = require('querystring')

function iniciar(response, postData) {
    console.log("Manipulador de peticion 'iniciar' fue llamado.");

    // exec("find /",
    //     { timeout: 10000, maxBuffer: 20000*1024 },
    //     function (err, stdout, stderr) {
    //     response.writeHead(200, {'Content-Type': 'text/html'})
    //     response.write(stdout)
    //     response.end();
    // })

    var body = '<html>'+
        '<head>'+
        '<meta http‐equiv="Content‐Type" content="text/html" charset="UTF‐8" />'+
        '</head>'+
        '<body>'+
        '<form action="/subir" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Enviar texto" />'+
        '</form>'+
        '</body>'+
        '</html>';

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.write(body)
        response.end();
}

function subir(response, postData) {
    console.log("Manipulador de peticion 'subir' fue llamado.");

    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('You send: ' + querystring.parse(postData)['text'])
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
