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
      phone,
      orderStatus: "Confirmado",
      orderDate: new Date(),
      deliveryDate: new Date(), //TODO: Incrementar la fecha
      totalPrice,
      userId,
    });
    const saved = await newOrder.save();
    res.status(200).json(saved);
  } catch (e) {
    httpError(res, e);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await ordersModel.findById(id);
    if (!order) {
      res.send("La orden no existe.");
    } else {
      const { ...data } = req.body;
      const orderUpdate = await ordersModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.status(200).json(orderUpdate);
    }
  } catch (e) {
    httpError(res, e);
  }
};

export { getOneOrder, getOrders, createOrder, getOrdersUser, updateOrder };
