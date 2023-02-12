import { Question } from '../question/question.entity';
import { Respondent } from '../respondent/respondent.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Response {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  comment: string;

  @ManyToOne((type) => Question, (question) => question.responses)
  question: Question;

  @ManyToOne((type) => Respondent, (respondent) => respondent.responses)
  respondent: Respondent;
}
