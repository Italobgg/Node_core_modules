const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Internal Server Error");
          return res.end();
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("Internal Server Error");
          return res.end();
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  } else {
    res.writeHead(400, { "Content-Type": "text/plain" });
    res.write("Bad Request");
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Porta ${port} on.`);
});
