import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";

const getProducts = async (req, res) => {
  const productos = await productsModel.find();
  console.log(productos);
  res.send(productos);
};

const createProducts = async (req, res) => {
  try {
    const { name, image, materials, description, price, delay, sold } =
      req.body;
    const producto = productsModel({
      name,
      image,
      materials,
      description,
      price,
      delay,
      sold,
    });

    const resultado = await producto.save();
    return res.status(200).json(resultado);
  } catch (err) {
    httpError(res, err);
  }
};

export { getProducts, createProducts };
