// Das node-eigene Modul "http" einbinden
const http = require('http');

// Das eigene Modul "handle" einbinden
const handle = require('./handle');

// kleiner Webserver, der die handle-Funktion abruft/ausführt 
const server  = http.createServer(handle);

server.listen(3000, () => 
{
    // Damit bei der Entwicklung überprüft werden kann, 
    // ob der Server erreichbar ist (etwas tut),
    // wird der folgende Text auf der Konsole ausgegeben 
    console.log('Sever listening on port 3000.');
});
