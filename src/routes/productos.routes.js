import { Router } from "express";
import {
  crearProducto,
  listarProducto,
} from "../controllers/productos.controller.js";

export const productoRouter = Router();

productoRouter.route("/producto").post(crearProducto).get(listarProducto);
