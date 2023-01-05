import mongoose from "mongoose";
import User from "../models/user.js";
import products from "../models/products.js";
import { faker } from "@faker-js/faker";
main().catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://localhost:27017/c81");

  //Poblando la base de datos user
  const user = await User.find();

  if (user.length === 0) {
    console.log("User poblada con datos de prueba");
    for (let i = 0; i < 5; i++) {
      let nuevo = new User({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        passwordHash: "password de prueba",
        street: faker.address.city(),
        phone: 481450,
        zip: 3562,
      });
      const user = await nuevo.save();
    }
  }

  //Poblando la base de datos Products
  const productos = await products.find();

  if (productos.length === 0) {
    console.log("Products poblada con datos de prueba");
    for (let i = 0; i < 21; i++) {
      const producto = new products({
        name: `Mascara de ${faker.animal.cat()}`,
        image: faker.image.cats(),
        materials: faker.lorem.paragraph(),
        description: `Mascara de exelente calidad y ${faker.word.adjective()}`,
        price: faker.finance.amount(),
        delay: faker.date.past(),
        sold: 0,
      });
      const product = await producto.save();
    }
  }
  console.log("Conectado a la base de datos");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

export default main;
