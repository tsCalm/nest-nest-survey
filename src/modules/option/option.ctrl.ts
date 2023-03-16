import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { OptionCreateDto } from './dto/option-create.dto';
import { OptionUpdateDto } from './dto/option-update.dto';
import {
  CreateOptionInPort,
  CREATE_OPTION_INBOUND_PORT,
} from './in-port/option-create.ip';
import {
  DeleteOptionInPort,
  DELETE_OPTION_INBOUND_PORT,
} from './in-port/option-delete.ip';

import {
  UpdateOptionInPort,
  UPDATE_OPTION_INBOUND_PORT,
} from './in-port/option-update.ip';

@Controller('option')
export class OptionController {
  constructor(
    @Inject(CREATE_OPTION_INBOUND_PORT)
    private readonly _createOptionInPort: CreateOptionInPort,
    @Inject(UPDATE_OPTION_INBOUND_PORT)
    private readonly _updateOptionInPort: UpdateOptionInPort,
    @Inject(DELETE_OPTION_INBOUND_PORT)
    private readonly _deleteOptionInPort: DeleteOptionInPort,
  ) {}

  @Post('create')
  create(@Body() surveyCreateDto: OptionCreateDto) {
    return this._createOptionInPort.execute(surveyCreateDto);
  }

  @Patch('update/:id')
  update(
    @Body() surveyUpdateDto: OptionUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this._updateOptionInPort.execute({
      ...surveyUpdateDto,
      id,
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._deleteOptionInPort.execute(id);
  }
}
