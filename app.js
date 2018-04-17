const http = require('http');

// kleiner Webserver
const server  = http.createServer((req, res) => {
    // Zusätzlich Anweisung um einen Header zu übergeben,
    // dass der Ausgabetext vom Browser als HMTL interpretiert wird
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    // Tue etwas bzw. gebe etwas wieder...
    // und hänge noch dran, um welche Methode es sich handelt
    // und welche url aufgerufen wurde
    res.write('Hallo HTTP! ' + req.method + ' ' + req.url);

    // die Verbindung zum Server wird wieder geschlossen
    res.end();
});

server.listen(3000, () => 
{
    // Damit bei der Entwicklung überprüft werden kann, 
    // ob der Server erreichbar ist (etwas tut),
    // wird der folgende Text auf der Konsole ausgegeben 
    console.log('Sever listening on port 3000.');
});
