require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "admin@primetrade.ai";
  const password = "admin123";

  const existing = await User.findOne({ email });
  if (existing) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name: "Admin User",
    email,
    password: hashedPassword,
    role: "admin",
  });

  console.log("✅ Admin user created");
  process.exit();
}

createAdmin();
