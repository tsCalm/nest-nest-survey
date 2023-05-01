import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ErrorController } from '../../common/error-controller';
import { UserCreateDto } from './dto/user-create.dto';
import {
  CreateUserInPort,
  CREATE_USER_INBOUND_PORT,
} from './in-port/user-create.ip';
import { User } from './user.entity';

@Controller('user')
@ApiTags('user')
@ApiExtraModels(User)
export class UserController extends ErrorController {
  constructor() // private readonly _createUserInPort: CreateUserInPort, // @Inject(CREATE_USER_INBOUND_PORT)
  {
    super();
  }

  @Post('create')
  @ApiOperation({
    summary: '유저 생성',
  })
  async create(@Body() userCreateDto: UserCreateDto) {
    console.log('userCreateDto : ', userCreateDto);
    return { userCreateDto };
    // const result = await this._createUserInPort.execute(userCreateDto);
    // this.isEmpty(result, `유저 생성에 실패했습니다.`);
    // return result;
  }
}
