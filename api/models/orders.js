import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Types = Schema.Types;

const OrderSchema = new Schema({
  orderItems: [
    {
      productID: Types.ObjectId,
      quantity: Number,
    },
  ],
  shippingAddress: {
    address: String,
    city: String,
    zip: Number,
  },
  phone: String,
  orderStatus: String,
  orderDate: Date,
  deliveryDate: Date,
  totalPrice: Number,
  userId: Types.ObjectId,
},
{
  timestamps: { 
    createdAt: false, 
    updatedAt: true,
  },
  versionKey: false,
});

const ordersModel = mongoose.model("orders",OrderSchema);

export default ordersModel;