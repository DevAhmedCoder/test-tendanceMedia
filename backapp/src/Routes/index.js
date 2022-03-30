import { Router } from "express";
import { fakeData } from "../mockData/index";
import ticket from "./ticket";

const router = Router();

router.use([ticket, router.get("/seed-db", fakeData)]);

export default router;
