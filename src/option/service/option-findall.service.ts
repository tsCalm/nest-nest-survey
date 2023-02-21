import { Inject, Injectable } from '@nestjs/common';
import {
  FindAllOptionInPort,
  OptionFindAllInPortInputDto,
  OptionFindAllInPortOutputDto,
} from '../in-port/option-findall.ip';
import {
  FindAllOptionOutPort,
  FINDALL_OPTION_OUTBOUND_PORT,
} from '../out-port/option-findall.op';

@Injectable()
export class OptionFindAllService implements FindAllOptionInPort {
  constructor(
    @Inject(FINDALL_OPTION_OUTBOUND_PORT)
    private readonly findAllOptionOutPort: FindAllOptionOutPort,
  ) {}
  execute(
    params: OptionFindAllInPortInputDto,
  ): Promise<OptionFindAllInPortOutputDto> {
    return this.findAllOptionOutPort.execute(params);
  }
}
