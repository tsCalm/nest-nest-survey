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
  name: 'user',
})
export class User extends BaseEntity {
  @Index({ fulltext: true })
  @Column({ comment: '유저 이름' })
  @ApiProperty()
  name: string;

  @Column({ type: 'text', comment: '주소' })
  @ApiProperty()
  address: string;

  @Column({ type: 'varchar', comment: '주소 상세' })
  @ApiProperty()
  address_etc: string;

  @Column({ type: 'int', default: 0 }) // 추가
  birth: string;

  @OneToMany((type) => Question, (question) => question.survey)
  @ApiProperty({ type: [Question] })
  question: Question[];
}
