import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString } from 'class-validator';
import { RespondentCreateInPortInputDto } from '../in-port/respondent-create.ip';

export class RespondentCreateDto implements RespondentCreateInPortInputDto {
  @IsString()
  @ApiProperty({
    description: '설문 응답자 이름',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: '설문 응답자 이메일',
  })
  email: string;
}
