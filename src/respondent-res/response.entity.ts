import { Question } from '../question/question.entity';
import { Respondent } from '../respondent/respondent.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../common/base-entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'respondent_res',
})
export class Response extends BaseEntity {
  @Column({ type: 'varchar', comment: '유저 응답' })
  @ApiProperty()
  answer: string;

  @Column({ type: 'int' })
  @ApiProperty()
  question_id: number;

  @Column({ type: 'int' })
  @ApiProperty()
  respondent_id: number;

  @ManyToOne((type) => Question, (question) => question.responses)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @ManyToOne((type) => Respondent, (respondent) => respondent.responses)
  @JoinColumn({ name: 'respondent_id' })
  respondent: Respondent;
}
