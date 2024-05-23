import { Slot } from "../models/slot";
import dataSource from "../../config/db";

export function getSlotsRepository() {
  const slotRepository = dataSource.getRepository(Slot);
  return {
    getSlotsByDate: (date: string) =>
      slotRepository
        .createQueryBuilder("slot")
        .where("DATE(slot.startTime) = DATE(:date)", { date })
        .getMany(),
  };
}
