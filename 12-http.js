const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is out short history");
  } else {
    res.end(
      `<h1><Ooops!/h1>
        <p> We cant seem to find the page we are looking for</p>
        <a href="/" >back home</a>`
    );
  }
});

server.listen(5000);
