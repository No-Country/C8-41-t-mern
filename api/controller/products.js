import productsModel from "../models/products.js";

const getProducts = async (req, res) => {
  const productos = await productsModel.find();
  console.log(productos);
  res.send(productos);
};

const createProducts = async (req, res) => {
  const { name, image, materials, description, price, delay, sold } = req.body;
  const producto = new productsModel({
    name: name,
    image: image,
    materials: materials,
    description: description,
    price: price,
    delay: delay,
    sold: sold,
  });

  const resultado = await producto.save();
  return res.status(200).json(resultado)
};

export { getProducts, createProducts };
