import Ticket from "Models/Ticket";
import { handleErrors } from "Helpers/Errors";

export const findAllTickets = async (req, res) => {
  let filter = {};
  if (req.query.createdAt) {
    filter = {
      createdAt: {
        $gte: new Date(req.query.createdAt + "T00:00:00.000Z"),
        $lte: new Date(req.query.createdAt + "T23:59:59.999Z"),
      },
    };
  }
  if (!!req.query.title) filter = { ...filter, title: req.query.title };
  if (!!req.query.typeDoc) filter = { ...filter, typeDoc: req.query.typeDoc };

  try {
    const data = await Ticket.find(filter);
    if (data) {
      res.status(200).send(data);
    } else throw error;
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
