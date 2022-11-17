import productsModel from "../models/products.js";

const getProducts = async (req, res) => {
  const productos = await productsModel.find();
  console.log(productos);
  res.send(productos);
};

const getOneProduct = async (req, res) => {
  const product = await productsModel.findById(req.params.id);
  if (!product) {
    res.status(500).json({ success: false });
  }
  res.send(product);
}

const createProducts = async (req, res) => {
    const body = req.body;
    console.log("yohan", body);
    const { name, image, materials, description, price, delay, sold } =
      req.body;
    const producto = new productsModel({
      name,
      image,
      materials,
      description,
      price,
      delay,
      sold
    });

    const resultado = await producto.save();
    if (!resultado) return res.status(500).send('The product cannot be created');
    return res.status(200).json(resultado)
};



export { getProducts, getOneProduct, createProducts };
