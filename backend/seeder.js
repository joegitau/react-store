import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import users from "./data/users.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

dotenv.config();
connectDB();

const insertData = async () => {
  try {
    // empty all collections
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    console.log("Users collection has been seeded...");

    // get admin
    const admin = createdUsers.find((u) => u.isAdmin === true);

    // add admin user to all products
    const productsWithAdmin = products.map((product) => ({
      ...product,
      user: admin,
    }));

    // seed products collection
    await Product.insertMany(productsWithAdmin);
    console.log(`Products collection has been seeded...`);

    process.exit();
  } catch (error) {
    console.error(`Error seeding: ${error.message}`);
    process.exit(1);
  }
};

const emptyData = async () => {
  try {
    // empty all collections
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.log(`All collections have been destroyed...`);
    process.exit();
  } catch (error) {
    console.error(`Error destroying collections: ${error.message}`);
    process.exit(1);
  }
};

// empty or seed collection
process.argv[2] === "-d" ? emptyData() : insertData();
