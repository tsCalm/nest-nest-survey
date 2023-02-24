import { Question } from '../question/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../common/base-entity';

@Entity({
  name: 'survey',
})
export class Survey extends BaseEntity {
  @Column({ comment: '설문지 이름' })
  name: string;

  @Column({ comment: '설문지 설명' })
  description: string;

  @OneToMany((type) => Question, (question) => question.survey)
  questions: Question[];
}
