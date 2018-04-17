// Das node-eigene Modul "http" einbinden
const http = require('http');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hallo Node.js!');
});

// kleiner Webserver, der die handle-Funktion abruft/ausführt 
const server  = http.createServer(app)

server.listen(3000, () => 
{
    // Damit bei der Entwicklung überprüft werden kann, 
    // ob der Server erreichbar ist (etwas tut),
    // wird der folgende Text auf der Konsole ausgegeben 
    console.log('Sever listening on port 3000.');
});
