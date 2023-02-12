import { Survey } from '../survey/survey.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Response } from '../response/response.entity';
import { Question } from 'src/question/question.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint', comment: '보기 넘버' })
  option_number: number;

  @Column({ type: 'varchar', comment: '보기' })
  text: string;

  @OneToMany((type) => Question, (opt) => opt.option)
  question: Question;
}
