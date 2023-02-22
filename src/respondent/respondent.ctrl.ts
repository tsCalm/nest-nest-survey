import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { RespondentCreateDto } from './dto/respondent-create.dto';
import {
  CreateRespondentInPort,
  CREATE_RESPONDENT_INBOUND_PORT,
} from './in-port/respondent-create.ip';
import {
  FindAllRespondentInPort,
  FINDALL_RESPONDENT_INBOUND_PORT,
} from './in-port/respondent-findall.ip';
import {
  FindOneRespondentInPort,
  FINDONE_RESPONDENT_INBOUND_PORT,
} from './in-port/respondent-findone.ip';
import {
  SearchRespondentInPort,
  SEARCH_RESPONDENT_INBOUND_PORT,
} from './in-port/respondent-search.ip';

@Controller('respondent')
export class RespondentController {
  constructor(
    @Inject(FINDALL_RESPONDENT_INBOUND_PORT)
    private readonly findAllRespondentInPort: FindAllRespondentInPort,
    @Inject(FINDONE_RESPONDENT_INBOUND_PORT)
    private readonly findOneRespondentInPort: FindOneRespondentInPort,
    @Inject(CREATE_RESPONDENT_INBOUND_PORT)
    private readonly createRespondentInPort: CreateRespondentInPort,
    @Inject(SEARCH_RESPONDENT_INBOUND_PORT)
    private readonly searchRespondentInPort: SearchRespondentInPort,
  ) {}

  @Get('')
  findAll() {
    return this.findAllRespondentInPort.execute({
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Get(':id/all')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneRespondentInPort.execute(id);
  }

  @Get('/search')
  search() {
    return this.searchRespondentInPort.execute({
      keyword: '선호',
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Post('create')
  create(@Body() surveyCreateDto: RespondentCreateDto) {
    return this.createRespondentInPort.execute(surveyCreateDto);
  }
}
