import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Response } from '../response/response.entity';
@Entity()
export class Respondent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany((type) => Response, (response) => response.respondent)
  responses: Response[];
}
