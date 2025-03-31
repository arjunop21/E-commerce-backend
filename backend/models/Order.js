const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: [{ product: String, quantity: Number }],
    totalPrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
