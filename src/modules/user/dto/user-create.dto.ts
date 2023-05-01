import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, Matches } from 'class-validator';
import { UserCreateInPortInputDto } from '../in-port/user-create.ip';

export class UserCreateDto implements UserCreateInPortInputDto {
  @IsString()
  @ApiProperty({
    description: '유저 이메일',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: '유저 이메일',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: '유저 이메일',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: '유저 이메일',
  })
  address: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: '유저 이메일',
  })
  address_etc?: string;

  @IsDateString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  birth: Date;

  @IsString()
  @Matches(/^\d{10,11}$/)
  tel: string;
}
