import ordersModel from "../models/orders.js";
// import productsModel from "../models/products.js";
// import usersModel from "../models/users.js";

const getOrders = async (req, res) => {
  try {
    const orders = await ordersModel.find();
    res.json(orders);
  } catch (e) {
    res.status(500).send("Algo ocurrió");
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await ordersModel.findById(req.params.id);
    res.json(order);
  } catch (e) {
    res.status(500).send("Algo ocurrió");
  }
};

const createOrder = async (req, res) => {
  try {
    const body = req.body;
    const { orderItems, shippingAddress, phone, totalPrice, userId } = body;

    const newOrder = new ordersModel({
      orderItems,
      shippingAddress,
      phone, //TODO: ¿Debe obtenerse del user i se debe preguntar?
      orderStatus: "Confirmado",
      orderDate: new Date(),
      deliveryDate: new Date(), //TODO: Incrementar la fecha
      totalPrice, //TODO: Calcular el precio obteniendolo de la coleccion products
      userId,
    });
    const saved = await newOrder.save();
    res.status(200).json(saved);
    //TODO: ¿Se debe incrementar el sold del producto?
  } catch (e) {
    res.status(500).json("La orden no pudo ser creada");
  }
};

export { getOneOrder, getOrders, createOrder };
