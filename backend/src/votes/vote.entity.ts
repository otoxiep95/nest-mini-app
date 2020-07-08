import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote: string;
}
