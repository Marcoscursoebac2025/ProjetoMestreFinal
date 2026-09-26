const path = require("path");
const app = require(path.resolve(__dirname, "../../hub-de-leitura-integrado/src/server"));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Servidor levantado en http://localhost:${port}`);
});
