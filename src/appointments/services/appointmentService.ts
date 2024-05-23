import { Slot } from "../models/slot";
import { Appointment } from "../models/appointment";
import dataSource from "../../config/db";

export async function createAppointmentService(slotId: number) {
  const entityManager = dataSource.manager;
  const slot = await entityManager.findOne(Slot, {
    where: { id: slotId },
  });

  if (!slot) {
    throw new Error("Slot not found");
  }

  if (!slot.availability) {
    throw new Error("Slot is not available");
  }

  return await entityManager.transaction(async (transactionalEntityManager) => {
    slot.availability = false;
    await transactionalEntityManager.save(slot);

    const newAppointment = transactionalEntityManager.create(Appointment, {
      slot,
    });
    return await transactionalEntityManager.save(newAppointment);
  });
}
