import { Question } from '../question/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '설문지 이름' })
  name: string;

  @Column({ comment: '설문지 설명' })
  description: string;

  @OneToMany((type) => Question, (question) => question.survey)
  questions: Question[];
}
