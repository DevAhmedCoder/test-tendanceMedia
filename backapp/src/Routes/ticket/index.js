import express from "express";
import {
  findAllTickets,
  findTicketById,
  createTicket,
} from "Controllers/ticket";

import dotenv from "dotenv";
const { API_ROUTE_HEADER_TICKET } = dotenv.config().parsed;

const router = express.Router();

router.get(API_ROUTE_HEADER_TICKET, findAllTickets);

export default router;
