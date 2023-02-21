import { IsInt, IsString } from 'class-validator';
import { OptionCreateInPortInputDto } from '../in-port/option-create.ip';

export class OptionCreateDto implements OptionCreateInPortInputDto {
  @IsInt()
  option_number: number;

  @IsInt()
  question_id: number;

  @IsString()
  text: string;
}
