import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsOptional } from 'class-validator';
import { SurveyUpdateInPortInputDto } from '../in-port/survey-update.ip';

export class SurveyUpdateDto implements Omit<SurveyUpdateInPortInputDto, 'id'> {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  description: string;
}
