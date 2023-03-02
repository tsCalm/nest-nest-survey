import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { OptionCreateInPortInputDto } from '../in-port/option-create.ip';

export class OptionCreateDto implements OptionCreateInPortInputDto {
  @IsInt()
  @ApiProperty({
    description: '선택지 번호',
  })
  option_number: number;

  @IsInt()
  @ApiProperty({
    description: '질문지 번호',
  })
  question_id: number;

  @IsString()
  @ApiProperty({
    description: '선택지 내용',
  })
  text: string;
}
