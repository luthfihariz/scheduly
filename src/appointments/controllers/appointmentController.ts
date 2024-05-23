import { Request, Response } from "express";
import { createAppointmentService } from "../services/appointmentService";

export async function createAppointment(req: Request, res: Response) {
  const { slotId } = req.body;
  const appointment = await createAppointmentService(slotId);
  res.json(appointment);
}
