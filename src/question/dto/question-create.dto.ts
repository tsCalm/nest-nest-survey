import { IsInt, IsString } from 'class-validator';
import { QuestionCreateInPortInputDto } from '../in-port/question-create.ip';

export class QuestionCreateDto implements QuestionCreateInPortInputDto {
  @IsInt()
  question_number: number;

  @IsInt()
  survey_id: number;

  @IsString()
  text: string;

  @IsString()
  type: string;
}
