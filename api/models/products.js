import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductScheam = new Schema({
  name: String,
  image: String,
  materials: String,
  description: String,
  price: Number,
  delay: String,
  sold: Number,
});

const productsModel = mongoose.model("products", ProductScheam);

export default productsModel;
