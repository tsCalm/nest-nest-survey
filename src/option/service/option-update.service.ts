import { Inject, Injectable } from '@nestjs/common';
import {
  OptionUpdateInPortInputDto,
  OptionUpdateInPortOutputDto,
  UpdateOptionInPort,
} from '../in-port/option-update.ip';
import {
  UpdateOptionOutPort,
  UPDATE_OPTION_OUTBOUND_PORT,
} from '../out-port/option-update.op';

@Injectable()
export class OptionUpdateService implements UpdateOptionInPort {
  constructor(
    @Inject(UPDATE_OPTION_OUTBOUND_PORT)
    private readonly updateOptionOutPort: UpdateOptionOutPort,
  ) {}

  execute(
    params: OptionUpdateInPortInputDto,
  ): Promise<OptionUpdateInPortOutputDto> {
    return this.updateOptionOutPort.execute(params);
  }
}
