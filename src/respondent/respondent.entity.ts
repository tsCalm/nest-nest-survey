import { BaseEntity } from '../common/base-entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Response } from '../respondent-res/response.entity';

@Entity({
  name: 'respondent',
})
export class Respondent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '참여자 이름' })
  name: string;

  @Column({ comment: '참여자 이메일' })
  email: string;

  @OneToMany((type) => Response, (response) => response.respondent)
  responses: Response[];
}
