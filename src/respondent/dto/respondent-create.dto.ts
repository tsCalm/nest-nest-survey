import { IsEmail, IsInt, IsString } from 'class-validator';
import { RespondentCreateInPortInputDto } from '../in-port/respondent-create.ip';

export class RespondentCreateDto implements RespondentCreateInPortInputDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
