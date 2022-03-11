import { Prisma } from "../prisma.js";

export const crearProducto = async (req, res) => {
  const data = req.body;
  const content = await Prisma.producto.create({ data });
  return res.status(201).json({ content });
};

export const listarProducto = async (req, res) => {
  const productos = await Prisma.producto.findMany();
  return res.json({ content: productos });
};

export const buscarProducto = async (req, res) => {
  console.log(req.query);
  return res.json({
    content: null,
  });
};
