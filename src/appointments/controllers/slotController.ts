import { Request, Response } from "express";
import { getSlotsService } from "../services/slotService";

export async function getSlots(req: Request, res: Response) {
  const date = req.query.date as string;
  const slots = await getSlotsService(date);
  res.json(slots);
}
