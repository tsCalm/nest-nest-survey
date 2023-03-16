import { BaseEntity } from '../../common/base-entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Response } from '../respondent-res/response.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'respondent',
})
export class Respondent extends BaseEntity {
  @Column({ comment: '참여자 이름' })
  @ApiProperty()
  name: string;

  @Column({ comment: '참여자 이메일' })
  @ApiProperty()
  email: string;

  @OneToMany((type) => Response, (response) => response.respondent)
  @ApiProperty({ type: [Response] })
  responses: Response[];
}
