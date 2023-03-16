import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';
import { QuestionUpdateInPortInputDto } from '../in-port/question-update.ip';

export class QuestionUpdateDto
  implements Omit<QuestionUpdateInPortInputDto, 'id'>
{
  // @IsInt()
  // id: number;

  @IsInt()
  @ApiProperty({})
  survey_id: number;

  @IsInt()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  question_number: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  text: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  type: string;
}
