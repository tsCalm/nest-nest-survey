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
  FindAllOptionInPort,
  FINDALL_OPTION_INBOUND_PORT,
} from './in-port/option-findall.ip';
import {
  FindOneOptionInPort,
  FINDONE_OPTION_INBOUND_PORT,
} from './in-port/option-findone.ip';
import {
  SearchOptionInPort,
  SEARCH_OPTION_INBOUND_PORT,
} from './in-port/option-search.ip';
import {
  UpdateOptionInPort,
  UPDATE_OPTION_INBOUND_PORT,
} from './in-port/option-update.ip';

@Controller('option')
export class OptionController {
  constructor(
    @Inject(FINDALL_OPTION_INBOUND_PORT)
    private readonly findAllOptionInPort: FindAllOptionInPort,
    @Inject(FINDONE_OPTION_INBOUND_PORT)
    private readonly findOneOptionInPort: FindOneOptionInPort,
    @Inject(CREATE_OPTION_INBOUND_PORT)
    private readonly createOptionInPort: CreateOptionInPort,
    @Inject(UPDATE_OPTION_INBOUND_PORT)
    private readonly updateOptionInPort: UpdateOptionInPort,
    @Inject(DELETE_OPTION_INBOUND_PORT)
    private readonly deleteOptionInPort: DeleteOptionInPort,
    @Inject(SEARCH_OPTION_INBOUND_PORT)
    private readonly searchOptionInPort: SearchOptionInPort,
  ) {}

  @Get('')
  findAll() {
    return this.findAllOptionInPort.execute({
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Get(':id/all')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneOptionInPort.execute(id);
  }

  @Get('/search')
  search() {
    return this.searchOptionInPort.execute({
      keyword: '선호',
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Post('create')
  create(@Body() surveyCreateDto: OptionCreateDto) {
    return this.createOptionInPort.execute(surveyCreateDto);
  }

  @Patch(':id')
  update(@Body() surveyUpdateDto: OptionUpdateDto) {
    return this.updateOptionInPort.execute(surveyUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteOptionInPort.execute(id);
  }
}
