import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { ResponseCreateInPortInputDto } from '../in-port/response-create.ip';

export class ResponseCreateDto implements ResponseCreateInPortInputDto {
  @IsString()
  @ApiProperty({
    description: '유저 응답',
  })
  answer: string;

  @IsInt()
  @ApiProperty({
    description: '설문지 id',
  })
  question_id: number;

  @IsInt()
  @ApiProperty({
    description: '응답자 id',
  })
  respondent_id: number;
}
