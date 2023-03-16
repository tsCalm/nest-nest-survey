import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';
import { OptionUpdateInPortInputDto } from '../in-port/option-update.ip';

export class OptionUpdateDto implements Omit<OptionUpdateInPortInputDto, 'id'> {
  @IsInt()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  option_number?: number;

  // @IsInt()
  // id: number;

  @IsInt()
  @ApiProperty()
  question_id: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  text: string;
}
