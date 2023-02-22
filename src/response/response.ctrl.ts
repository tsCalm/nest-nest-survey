import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ResponseCreateDto } from './dto/response-create.dto';
import {
  CreateResponseInPort,
  CREATE_RESPONSE_INBOUND_PORT,
} from './in-port/response-create.ip';

@Controller('response')
export class ResponseController {
  constructor(
    @Inject(CREATE_RESPONSE_INBOUND_PORT)
    private readonly createResponseInPort: CreateResponseInPort,
  ) {}

  @Post('create')
  create(@Body() responseCreateDto: ResponseCreateDto) {
    return this.createResponseInPort.execute(responseCreateDto);
  }
}
