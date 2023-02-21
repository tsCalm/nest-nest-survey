import { Inject, Injectable } from '@nestjs/common';
import {
  OptionSearchInPortInputDto,
  OptionSearchInPortOutputDto,
  SearchOptionInPort,
} from '../in-port/option-search.ip';
import {
  SearchOptionOutPort,
  SEARCH_OPTION_OUTBOUND_PORT,
} from '../out-port/option-search.op';

@Injectable()
export class OptionSearchService implements SearchOptionInPort {
  constructor(
    @Inject(SEARCH_OPTION_OUTBOUND_PORT)
    private readonly searchOptionOutPort: SearchOptionOutPort,
  ) {}

  execute(
    params: OptionSearchInPortInputDto,
  ): Promise<OptionSearchInPortOutputDto> {
    return this.searchOptionOutPort.execute(params);
  }
}
