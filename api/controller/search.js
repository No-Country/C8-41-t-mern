import mongoose, { set } from "mongoose";
import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";
import { json, text } from "express";

const searchProducts = async (req, res) => {

  const { encontrar } = req.body;
  const result = await productsModel.find({
    $text: { $search: encontrar },
  });

  if (result.length == 0) {
    const todos = await productsModel.find();

    const result = todos.filter((producto) =>
      producto.materials.includes(encontrar)
    );
    const result2 = todos.filter((producto) =>
      producto.name.includes(encontrar)
    );
    //Si un objeto de result contiene similitud con un resultado de result2 el mismo conserbara
    //los cambios de result2 y agregara los que la primera busqueda no contiene
    let result3 = { ...result, ...result2 };
    return res.send(result3).status(200);
  }
  res.send(result).status(200);
};

export { searchProducts };
