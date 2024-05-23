import { Appointment } from "../models/appointment";
import dataSource from "../../config/db";

export function getAppointmentRepository() {
  const appointmentRepository = dataSource.getRepository(Appointment);
  return {
    createAppointment: (slotId: number) => {
      const newAppointment = appointmentRepository.create({
        slot: { id: slotId },
      });
      return appointmentRepository.save(newAppointment);
    },
  };
}
