import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Response } from '../response/response.entity';
@Entity()
export class Respondent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '참여자 이름' })
  name: string;

  @Column({ comment: '참여자 이메일' })
  email: string;

  @OneToMany((type) => Response, (response) => response.respondent)
  responses: Response[];
}
