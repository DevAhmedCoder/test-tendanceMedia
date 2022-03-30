import mongoose from "mongoose";

const { Schema } = mongoose;
const ticket = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ref: {
      type: Number,
    },
    typeDoc: {
      type: String,
    },
    nbrDoc: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticket);

export default Ticket;
/*

*/
