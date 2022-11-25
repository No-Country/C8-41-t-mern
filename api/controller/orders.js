import ordersModel from "../models/orders.js";
import { httpError } from "../helper/handleError.js";

const getOrders = async (req, res) => {
  try {
    const orders = await ordersModel.find();
    if (orders.length < 1) {
      res.send("No hay órdenes que mostrar.");
    } else {
      res.json(orders);
    }
  } catch (e) {
    httpError(res, e);
  }
};

const getOrdersUser = async (req, res) => {
  try {
    const orders = await ordersModel.find({ userId: req.params.id });
    if (orders.length < 1) {
      res.send("No hay órdenes que mostrar.");
    } else {
      res.json(orders);
    }
  } catch (e) {
    httpError(res, e);
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await ordersModel.findById(req.params.id);
    if (!order) {
      res.send("La orden no existe.");
    } else {
      res.json(order);
    }
  } catch (e) {
    httpError(res, e);
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
    httpError(res, e);
  }
};

export { getOneOrder, getOrders, createOrder, getOrdersUser };
