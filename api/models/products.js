import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProductScheam = new Schema(
  {
    name: String,
    description: { type: String, index: { text: true, unique: false } },
    image: String,
    materials: String,
    price: Number,
    delay: String,
    sold: Number,
    stock: Number,
  },
  {
    timestamps: true,
  }
);

const productsModel = mongoose.model("products", ProductScheam);

export default productsModel;
