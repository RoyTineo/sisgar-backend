import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import personaRoutes from "./routes/persona.routes.js";
import tipoDocumentoRoutes from "./routes/persona.routes.js";

const app = express();

app.use(
  cors()
  // Se puede especificar quien se puede conectar
  // {
  //   origin: "http://localhost:3000",
  // }
);

app.use(express.json());

app.use(indexRoutes);
app.use(personaRoutes);
app.use(tipoDocumentoRoutes);

app.listen(PORT);

console.log(`Servidor corriendo en el puerto ${PORT}`);
