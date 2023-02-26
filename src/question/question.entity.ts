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
import { Option } from 'src/option/option.entity';
import { BaseEntity } from '../common/base-entity';

@Entity({
  name: 'question',
})
export class Question extends BaseEntity {
  @Column({ type: 'tinyint', comment: '질문 번호' })
  question_number: number;

  @Column({ type: 'text', comment: '질문 내용' })
  text: string;

  @Column({ comment: '객관식/주관식' })
  type: string;

  @Column({ type: 'int' })
  survey_id: number;

  @ManyToOne((type) => Survey, (survey) => survey.question)
  @JoinColumn({ name: 'survey_id' })
  survey: Survey;

  @OneToMany((type) => Option, (option) => option.question)
  option: Option[];

  @OneToMany((type) => Response, (response) => response.question)
  responses: Response[];
}
