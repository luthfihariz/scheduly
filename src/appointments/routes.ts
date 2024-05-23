// routers/appointmentRouter.ts
import { Router } from "express";
import { createAppointment } from "./controllers/appointmentController";
import { getSlots } from "./controllers/slotController";

const router = Router();

router.post("/appointments", createAppointment);
router.get("/slots", getSlots);

export default router;
