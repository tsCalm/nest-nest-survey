import { IsString, IsInt, IsOptional } from 'class-validator';
import { QuestionUpdateInPortInputDto } from '../in-port/question-update.ip';

export class QuestionUpdateDto implements QuestionUpdateInPortInputDto {
  @IsInt()
  id: number;

  @IsInt()
  survey_id: number;

  @IsInt()
  @IsOptional()
  question_number: number;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  type: string;
}
