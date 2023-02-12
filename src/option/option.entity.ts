import { Question } from 'src/question/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'tinyint', comment: '보기 넘버' })
  option_number: number;

  @Column({ type: 'varchar', comment: '보기' })
  text: string;

  @ManyToOne((type) => Question, (opt) => opt.option)
  question: Question;
}
