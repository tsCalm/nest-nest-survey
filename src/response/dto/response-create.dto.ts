import { IsInt, IsString } from 'class-validator';
import { ResponseCreateInPortInputDto } from '../in-port/response-create.ip';

export class ResponseCreateDto implements ResponseCreateInPortInputDto {
  @IsString()
  answer: string;

  @IsInt()
  question_id: number;

  @IsInt()
  respondent_id: number;
}
