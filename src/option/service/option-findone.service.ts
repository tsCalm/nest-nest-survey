import { Inject, Injectable } from '@nestjs/common';
import {
  FindOneOptionInPort,
  OptionFindOneInPortInputDto,
  OptionFindOneInPortOutputDto,
} from '../in-port/option-findone.ip';
import {
  FindOneOptionOutPort,
  FINDONE_OPTION_OUTBOUND_PORT,
} from '../out-port/option-findone.op';

@Injectable()
export class OptionFindOneService implements FindOneOptionInPort {
  constructor(
    @Inject(FINDONE_OPTION_OUTBOUND_PORT)
    private readonly findOneOptionOutPort: FindOneOptionOutPort,
  ) {}

  execute(
    params: OptionFindOneInPortInputDto,
  ): Promise<OptionFindOneInPortOutputDto> {
    return this.findOneOptionOutPort.execute(params);
  }
}
