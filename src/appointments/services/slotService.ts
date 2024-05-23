import { getSlotsRepository } from "../repositories/slotRepository";

export async function getSlotsService(date: string) {
  const slotRepository = getSlotsRepository();
  return slotRepository.getSlotsByDate(date);
}
