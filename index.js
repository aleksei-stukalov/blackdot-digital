// Entry JS file for NodeJS

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let parsedURL = url.parse(req.url, true);
    let path = parsedURL.path.replace(/^\/+|\/+$/g, '');
    if (path === '') {
        path = 'index.html';
    }
    // Some logic to Log the request with the IP of the user and the url,
    // maybe used for 'invite' links.
    console.log(`Requested path ${path} `);

    let file = __dirname + '/public/' + path;
    fs.readFile(file, function (err, content) {
        if (err) {
            console.log(`File Not Found ${file}`);
            res.writeHead(404);
            res.end();
        } else {
            console.log(`Returning ${path}`);
            res.setHeader('X-Content-Type-Options', 'nosniff');
            switch (path) {
                case 'index.html':
                    res.writeHead(200, { 'Content-type': 'text/html' });
                    break;
                case 'static/styles.css':
                    res.writeHead(200, { 'Content-type': 'text/css' });
                    break;
                case 'static/script.js':
                    res.writeHead(200, { 'Content-type': 'text/css' });
                    break;
                default:
                    break;
            }
            res.end(content);
        }
    });
});

server.listen(8080, 'localhost', () => {
    console.log('Listening on port 8080')
})