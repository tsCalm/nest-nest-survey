import { BaseEntity } from '../common/base-entity';
import { Question } from 'src/question/question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'question_opt',
})
export class Option extends BaseEntity {
  @Column({ type: 'tinyint', comment: '보기 넘버' })
  option_number: number;

  @Column({ type: 'int' })
  question_id: number;

  @Column({ type: 'varchar', comment: '보기' })
  text: string;

  @ManyToOne((type) => Question, (opt) => opt.option)
  @JoinColumn({ name: 'question_id' })
  question: Question;
}
