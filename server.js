const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      });
    } else if (req.url === "/api") {
      fs.readFile(path.join(__dirname, "db.json"), "utf-8", (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(content);
      });
    } else {
      res.end("<h1> page does not exist </h1>");
    }
  })
  .listen(process.env.PORT, () => console.log("server is running"));
