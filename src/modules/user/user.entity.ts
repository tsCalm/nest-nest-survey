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
  @Column({ type: 'varchar', nullable: false })
  @Index('user-email')
  email: string;

  @Column({ type: 'varchar', nullable: false, select: false })
  password: string;

  @Index({ fulltext: true })
  @Column({ type: 'varchar', length: 15, comment: '유저 이름' })
  @ApiProperty()
  name: string;

  @Column({ type: 'text', comment: '주소' })
  @ApiProperty()
  address: string;

  @Column({ type: 'varchar', comment: '주소 상세' })
  @ApiProperty()
  address_etc: string;

  @Column({ type: 'datetime', nullable: false }) // 추가
  birth: string;

  @Column({ type: 'varchar', length: '11', nullable: false, unique: true }) // 추가
  tel: string;
}
