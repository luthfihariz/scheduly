import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Slot } from "./slot";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Slot)
  slot!: Slot;
}
