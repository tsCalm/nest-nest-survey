import { IsInt, IsString, IsOptional } from 'class-validator';
import { SurveyUpdateInPortInputDto } from '../in-port/survey-update.ip';

export class SurveyUpdateDto implements SurveyUpdateInPortInputDto {
  @IsInt()
  id: number;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
