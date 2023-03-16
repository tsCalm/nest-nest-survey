import { Inject, Injectable } from '@nestjs/common';
import {
  FindOneRespondentInPort,
  RespondentFindOneInPortInputDto,
  RespondentFindOneInPortOutputDto,
} from '../in-port/respondent-findone.ip';
import {
  FindOneRespondentOutPort,
  FINDONE_RESPONDENT_OUTBOUND_PORT,
} from '../out-port/respondent-findone.op';

@Injectable()
export class RespondentFindOneService implements FindOneRespondentInPort {
  constructor(
    @Inject(FINDONE_RESPONDENT_OUTBOUND_PORT)
    private readonly _findOneRespondentOutPort: FindOneRespondentOutPort,
  ) {}

  execute(
    params: RespondentFindOneInPortInputDto,
  ): Promise<RespondentFindOneInPortOutputDto> {
    return this._findOneRespondentOutPort.execute(params);
  }
}
