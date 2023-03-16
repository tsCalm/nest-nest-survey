import { Inject, Injectable } from '@nestjs/common';
import {
  DeleteOptionInPort,
  OptionDeleteInPortInputDto,
  OptionDeleteInPortOutputDto,
} from '../in-port/option-delete.ip';
import {
  DeleteOptionOutPort,
  DELETE_OPTION_OUTBOUND_PORT,
} from '../out-port/option-delete.op';

@Injectable()
export class OptionDeleteService implements DeleteOptionInPort {
  constructor(
    @Inject(DELETE_OPTION_OUTBOUND_PORT)
    private readonly _deleteOptionOutPort: DeleteOptionOutPort,
  ) {}

  execute(
    params: OptionDeleteInPortInputDto,
  ): Promise<OptionDeleteInPortOutputDto> {
    return this._deleteOptionOutPort.execute(params);
  }
}
