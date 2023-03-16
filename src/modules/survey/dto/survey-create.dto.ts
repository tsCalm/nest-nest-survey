import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { SurveyCreateInPortInputDto } from '../in-port/survey-create.ip';

export class SurveyCreateDto implements SurveyCreateInPortInputDto {
  @IsString()
  @ApiProperty({
    description: '설문지 이름',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: '설문지 상세설명',
  })
  description: string;
}
