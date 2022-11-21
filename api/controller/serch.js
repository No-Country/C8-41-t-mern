import mongoose from "mongoose";
import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";
import { text } from "express";

const serchProducts = async (req, res) => {
  const encontrar = "metal";
  console.log(encontrar);
  const result = await productsModel.find({
    $text: { $search: encontrar },
  });
  if (result.length == 0) {
    const todos = await productsModel.find();

    const result = todos.filter((producto) =>
      producto.materials.includes(encontrar)
    );
    return res.send(result).status(200);
  }
  res.send(result).status(200);
};

export { serchProducts };
