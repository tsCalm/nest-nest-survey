import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { QuestionCreateInPortInputDto } from '../in-port/question-create.ip';

export class QuestionCreateDto implements QuestionCreateInPortInputDto {
  @IsInt()
  @ApiProperty({
    description: '질문지 번호',
  })
  question_number: number;

  @IsInt()
  @ApiProperty({
    description: '설문지 id',
  })
  survey_id: number;

  @IsString()
  @ApiProperty({
    description: '질문지 내용',
  })
  text: string;

  @IsString()
  @ApiProperty({
    description: '객관신 | 주관식',
  })
  type: string;
}
