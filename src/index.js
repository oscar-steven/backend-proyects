import express, { json } from "express";
import { productoRouter } from "./routes/productos.routes.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

// app.get("/", (req, res) => {
//   res.send("HOLA");
// });

//declaramos el tipo de contenido
app.use(json());

// rutas
app.use(productoRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en le puerto ${PORT}`);
});
