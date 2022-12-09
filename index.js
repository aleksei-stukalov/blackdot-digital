//Create a server that can send back static files
const http = require("http");
const url = require("url");
const fs = require("fs");

//npm i mime-types
const lookup = require("mime-types").lookup;

const server = http.createServer((req, res) => {
    //handle the request and send back a static file
    //from a folder called `public`
    let parsedURL = url.parse(req.url, true);
    //remove the leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
    /**
     *  /
     *  /index.html
     *
     *  /main.css
     *  /main.js
     */
    if (path == "") {
        path = "index.html";
    }
    console.log(`Requested path ${path} `);

    let file = __dirname + "/public/" + path;
    //async read file function uses callback
    fs.readFile(file, function(err, content) {
        if (err) {
            console.log(`File Not Found ${file}`);
            res.writeHead(404);
            res.end();
        } else if (path.search(/\.\./) === -1) {
            //specify the content type in the response
            console.log(`Returning ${path}`);
            res.setHeader("X-Content-Type-Options", "nosniff");
            let mime = lookup(path);
            res.writeHead(200, { "Content-type": mime });
            // switch (path) {
            //   case "main.css":
            //     res.writeHead(200, { "Content-type": "text/css" });
            //     break;
            //   case "main.js":
            //     res.writeHead(200, { "Content-type": "application/javascript" });
            //     break;
            //   case "index.html":
            //     res.writeHead(200, { "Content-type": "text/html" });
            // }
            res.end(content);
        } else {
            res.writeHead(423, { 'Content-Type': 'text/html' });
            res.end('Locked');
        }
    });
});

server.listen(1234, "localhost", () => {
    console.log("Listening on port 1234");
});