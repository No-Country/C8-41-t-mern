import mongoose from "mongoose";
import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";

const serchProducts = async (req, res) => {
  const productos = await productsModel.find();

  const result = productos.filter((producto) =>
    producto.toLowerCase().includes(title)
  );

  console.log(productos);
  res.send(productos);
};

export { serchProducts };
