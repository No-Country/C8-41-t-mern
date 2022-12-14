import mongoose, { set } from "mongoose";
import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";
import { json, text } from "express";

const searchProducts = async (req, res) => {
  const { encontrar } = req.query;
  console.log(req.query);
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
    let result3 = [...result, ...result2];
    if (result3.length < 0) {
      return res
        .send({ message: "No se encontro resultados para esta busqueda" })
        .status(200);
    }
    return res.send(result3).status(200);
  }

  res.send(result).status(200);
};

export { searchProducts };
