
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //forgien key


const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 64,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    price: {
      type: Number,
      required: true,
      maxlength: 64,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
