const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlinfo = require("url").parse(req.url, true);
  const name = urlinfo.query.name;

  res.statusCode = 200;
  res.setHeader("Contenty-Type", "text/html");

  if (!name) {
    res.end(
      '<h1>Preencha o nome do seu pokemon favorito:</h1><form method="Get"><input type="text" name="name"/><input type="submit" value="Enviar"></form>'
    );
  } else {
    res.end(`<h1>Muito legal, ${name} esta na no meu top 151 de kanto!`);
  }
});

server.listen(port, () => {
  console.log(`Servidor on na porta ${port}`);
});
