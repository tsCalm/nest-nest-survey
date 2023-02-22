import { Inject, Injectable } from '@nestjs/common';
import {
  FindAllRespondentInPort,
  RespondentFindAllInPortInputDto,
  RespondentFindAllInPortOutputDto,
} from '../in-port/respondent-findall.ip';
import {
  FindAllRespondentOutPort,
  FINDALL_RESPONDENT_OUTBOUND_PORT,
} from '../out-port/respondent-findall.op';

@Injectable()
export class RespondentFindAllService implements FindAllRespondentInPort {
  constructor(
    @Inject(FINDALL_RESPONDENT_OUTBOUND_PORT)
    private readonly findAllRespondentOutPort: FindAllRespondentOutPort,
  ) {}
  execute(
    params: RespondentFindAllInPortInputDto,
  ): Promise<RespondentFindAllInPortOutputDto> {
    return this.findAllRespondentOutPort.execute(params);
  }
}
