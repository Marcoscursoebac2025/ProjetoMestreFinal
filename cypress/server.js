const app = require("../../hub-de-leitura-integrado/src/app"); 
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Servidor levantado desde carpeta cypress en http://localhost:${port}`);
});
