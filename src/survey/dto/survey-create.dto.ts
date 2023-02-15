import { IsInt, IsString } from 'class-validator';
import { SurveyCreateInPortInputDto } from '../in-port/survey-create.ip';

export class SurveyCreateDto implements SurveyCreateInPortInputDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
}
