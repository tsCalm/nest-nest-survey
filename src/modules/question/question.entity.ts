import { Survey } from '../survey/survey.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Response } from '../respondent-res/response.entity';
import { Option } from '../option/option.entity';
import { BaseEntity } from '../../common/base-entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'question',
})
export class Question extends BaseEntity {
  @Column({ type: 'tinyint', comment: '질문 번호' })
  @ApiProperty()
  question_number: number;

  @Column({ type: 'text', comment: '질문 내용' })
  @ApiProperty()
  text: string;

  @Column({ comment: '객관식/주관식' })
  @ApiProperty()
  type: string;

  @Column({ type: 'int' })
  @ApiProperty()
  survey_id: number;

  @ManyToOne((type) => Survey, (survey) => survey.question)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  @OneToMany((type) => Option, (option) => option.question)
  @ApiProperty({ type: [Option] })
  option: Option[];

  @OneToMany((type) => Response, (response) => response.question)
  @ApiProperty({ type: [Response] })
  responses: Response[];
}
