import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  startTime!: Date;

  @Column()
  endTime!: Date;

  @Column({ default: true })
  availability!: boolean;
}
