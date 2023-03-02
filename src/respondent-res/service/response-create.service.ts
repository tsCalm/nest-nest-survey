import { Inject, Injectable } from '@nestjs/common';
import {
  CreateResponseInPort,
  ResponseCreateInPortInputDto,
  ResponseCreateInPortOutputDto,
} from '../in-port/response-create.ip';
import {
  CreateResponseOutPort,
  CREATE_RESPONSE_OUTBOUND_PORT,
} from '../out-port/response-create.op';

@Injectable()
export class ResponseCreateService implements CreateResponseInPort {
  constructor(
    @Inject(CREATE_RESPONSE_OUTBOUND_PORT)
    private readonly _createResponseOutPort: CreateResponseOutPort,
  ) {}
  execute(
    params: ResponseCreateInPortInputDto,
  ): Promise<ResponseCreateInPortOutputDto> {
    return this._createResponseOutPort.execute(params);
  }
}
