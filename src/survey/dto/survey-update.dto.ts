import { IsInt, IsString, IsOptional } from 'class-validator';
import { SurveyUpdateInPortInputDto } from '../in-port/survey-update.ip';

export class SurveyUpdateDto implements Omit<SurveyUpdateInPortInputDto, 'id'> {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
