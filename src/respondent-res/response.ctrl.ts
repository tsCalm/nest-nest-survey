import {
  Body,
  Controller,
  Inject,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { ResponseCreateDto } from './dto/response-create.dto';
import {
  CreateResponseInPort,
  CREATE_RESPONSE_INBOUND_PORT,
} from './in-port/response-create.ip';

@Controller('response')
export class ResponseController {
  constructor(
    @Inject(CREATE_RESPONSE_INBOUND_PORT)
    private readonly _createResponseInPort: CreateResponseInPort,
  ) {}

  isEmpty(obj: object, msg: string) {
    if (!obj) throw new NotFoundException(msg);
  }

  @Post('create')
  async create(@Body() responseCreateDto: ResponseCreateDto) {
    const result = await this._createResponseInPort.execute(responseCreateDto);
    this.isEmpty(result, '답변 등록에 실패했습니다.');
    return result;
  }
}
