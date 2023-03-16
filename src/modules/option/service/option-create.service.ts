import { Inject, Injectable } from '@nestjs/common';
import {
  CreateOptionInPort,
  OptionCreateInPortInputDto,
  OptionCreateInPortOutputDto,
} from '../in-port/option-create.ip';
import {
  CreateOptionOutPort,
  CREATE_OPTION_OUTBOUND_PORT,
} from '../out-port/option-create.op';

@Injectable()
export class OptionCreateService implements CreateOptionInPort {
  constructor(
    @Inject(CREATE_OPTION_OUTBOUND_PORT)
    private readonly _createOptionOutPort: CreateOptionOutPort,
  ) {}
  execute(
    params: OptionCreateInPortInputDto,
  ): Promise<OptionCreateInPortOutputDto> {
    return this._createOptionOutPort.execute(params);
  }
}
