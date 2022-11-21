import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Types = Schema.Types;

const OrderSchema = new Schema({
  orderItems: [
    {
      product: Types.ObjectId,
      quantity: Number,
    },
  ],
  shippingAddress: {
    address: String,
    city: String,
    zip: String,
  },
  phone: String,
  orderStatus: String,
  orderDate: Date,
  deliveryDate: Date,
  totalPrice: Number,
  user: Types.ObjectId,
},
{
  timestamps: true,
  versionKey: false,
});

const ordersModel = mongoose.model("orders",OrderSchema);

export default ordersModel;