import { BaseEntity } from '../../common/base-entity';
import { Question } from '../question/question.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'question_opt',
})
export class Option extends BaseEntity {
  @Column({ type: 'tinyint', comment: '보기 넘버' })
  @ApiProperty()
  option_number: number;

  @Column({ type: 'int' })
  @ApiProperty()
  question_id: number;

  @Column({ type: 'varchar', comment: '보기' })
  @ApiProperty()
  text: string;

  @ManyToOne((type) => Question, (opt) => opt.option)
  @JoinColumn({ name: 'question_id' })
  question: Question;
}
