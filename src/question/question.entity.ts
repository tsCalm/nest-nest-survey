import { Survey } from '../survey/survey.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Response } from '../response/response.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  type: string;

  @ManyToOne((type) => Survey, (survey) => survey.questions)
  survey: Survey;

  @OneToMany((type) => Response, (response) => response.question)
  responses: Response[];
}
