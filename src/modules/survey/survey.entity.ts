import { Question } from '../question/question.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/base-entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'survey',
})
export class Survey extends BaseEntity {
  @Index({ fulltext: true })
  @Column({ comment: '설문지 이름' })
  @ApiProperty()
  name: string;

  @Column({ type: 'text', comment: '설문지 설명' })
  @ApiProperty()
  description: string;

  @Column({ type: 'int', default: 0 }) // 추가
  tempTestField: string;

  @OneToMany((type) => Question, (question) => question.survey)
  @ApiProperty({ type: [Question] })
  question: Question[];
}
