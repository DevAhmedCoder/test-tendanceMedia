import Ticket from "Models/Ticket";
import { tickets } from "./data";
export const fakeData = async (_req, res) => {
  Ticket.insertMany(tickets);
  res.json("done");
};
