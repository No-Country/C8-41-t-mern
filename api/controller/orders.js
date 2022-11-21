import { httpError } from "../helper/handleError";
import { matchedData } from "express-validator";
import ordersModel from "../models/orders.js";

const getOrders = async (req, res) => {
  try {
    const orders = await ordersModel.find();
    res.json(orders);
  } catch (e) {
    httpError(res, e);
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await ordersModel.findById(req.params.id);
    res.json(order);
  } catch (e) {
    httpError(res, e);
  }
};

const createOrder = async (req, res) => {
  try {
    const body = req.body;
    const {
      orderItems,
      shippingAddress,
      phone,
      orderStatus,
      orderDate,
      deliveryDate,
      totalPrice,
      user,
    } = body;
    const order = new ordersModel({
      orderItems,
      shippingAddress,
      phone,
      orderStatus,
      orderDate,
      deliveryDate,
      totalPrice,
      user,
    });
    const saved = await order.save();
    res.status(200).json(saved);
  } catch (e) {
    httpError(res, e);
  }
};

const updateOrder = async (req, res) => {
  try {
    const data = matchedData(req, {
      locations: ["body"],
    });
    const id = data.id;
    const orderUpdate = await ordersModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(orderUpdate);
  } catch (e) {
    httpError(res, e);
  }
};

export { getOneOrder, getOrders, createOrder, updateOrder };
