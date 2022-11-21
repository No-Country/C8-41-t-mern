import mongoose from "mongoose";
import productsModel from "../models/products.js";
import { httpError } from "../helper/handleError.js";

const getProducts = async (req, res) => {
  const productos = await productsModel.find();
  res.send(productos);
};

const getOneProduct = async (req, res) => {
  const product = await productsModel.findById(req.params.id);
  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
};

const createProducts = async (req, res) => {
  const body = req.body;
  console.log("yohan", body);
  const { name, image, materials, description, price, delay, sold } = body;
  const producto = new productsModel({
    name,
    image,
    materials,
    description,
    price,
    delay,
    sold,
  });

  const resultado = await producto.save();
  if (!resultado) return res.status(500).send("The product cannot be created");
  return res.status(200).json(resultado);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid Product ID");
  }
  const { ...data } = req.body;
  const productUpdate = await productsModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.status(200).json(productUpdate);
};

export { getProducts, getOneProduct, createProducts, updateProduct };
