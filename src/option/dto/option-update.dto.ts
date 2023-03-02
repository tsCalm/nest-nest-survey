import { IsInt, IsOptional, IsString } from 'class-validator';
import { OptionUpdateInPortInputDto } from '../in-port/option-update.ip';

export class OptionUpdateDto implements Omit<OptionUpdateInPortInputDto, 'id'> {
  @IsInt()
  @IsOptional()
  option_number?: number;

  // @IsInt()
  // id: number;

  @IsInt()
  question_id: number;

  @IsString()
  @IsOptional()
  text: string;
}
