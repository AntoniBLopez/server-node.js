const server = require('./server');
const route = require('./router');
const requestHandlers = require('./requestHandlers');

let handle = {}

handle["/"] = requestHandlers.iniciar
handle["/iniciar"] = requestHandlers.iniciar
handle["/subir"] = requestHandlers.subir

server.start(route, handle)
