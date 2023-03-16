import { Inject, Injectable } from '@nestjs/common';
import {
  RespondentSearchInPortInputDto,
  RespondentSearchInPortOutputDto,
  SearchRespondentInPort,
} from '../in-port/respondent-search.ip';
import {
  SearchRespondentOutPort,
  SEARCH_RESPONDENT_OUTBOUND_PORT,
} from '../out-port/respondent-search.op';

@Injectable()
export class RespondentSearchService implements SearchRespondentInPort {
  constructor(
    @Inject(SEARCH_RESPONDENT_OUTBOUND_PORT)
    private readonly _searchRespondentOutPort: SearchRespondentOutPort,
  ) {}

  execute(
    params: RespondentSearchInPortInputDto,
  ): Promise<RespondentSearchInPortOutputDto> {
    return this._searchRespondentOutPort.execute(params);
  }
}
