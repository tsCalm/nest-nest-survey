import { Inject, Injectable } from '@nestjs/common';
import {
  CreateRespondentInPort,
  RespondentCreateInPortInputDto,
  RespondentCreateInPortOutputDto,
} from '../in-port/respondent-create.ip';
import {
  CreateRespondentOutPort,
  CREATE_RESPONDENT_OUTBOUND_PORT,
} from '../out-port/respondent-create.op';

@Injectable()
export class RespondentCreateService implements CreateRespondentInPort {
  constructor(
    @Inject(CREATE_RESPONDENT_OUTBOUND_PORT)
    private readonly _createRespondentOutPort: CreateRespondentOutPort,
  ) {}
  execute(
    params: RespondentCreateInPortInputDto,
  ): Promise<RespondentCreateInPortOutputDto> {
    return this._createRespondentOutPort.execute(params);
  }
}
