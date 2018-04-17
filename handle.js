const handle = function(req, res) {
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
};

module.exports = handle;