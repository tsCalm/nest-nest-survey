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
import {
  CreateSurveyInPort,
  CREATE_SURVEY_INBOUND_PORT,
} from './in-port/survey-create.ip';
import {
  DeleteSurveyInPort,
  DELETE_SURVEY_INBOUND_PORT,
} from './in-port/survey-delete.ip';
import {
  FindAllSurveyInPort,
  FINDALL_SURVEY_INBOUND_PORT,
  SurveyFindAllInPortInputDto,
} from './in-port/survey-findall.ip';
import {
  FindOneSurveyInPort,
  FINDONE_SURVEY_INBOUND_PORT,
} from './in-port/survey-findone.ip';
import {
  SearchSurveyInPort,
  SEARCH_SURVEY_INBOUND_PORT,
} from './in-port/survey-search.ip';
import {
  UpdateSurveyInPort,
  UPDATE_SURVEY_INBOUND_PORT,
} from './in-port/survey-update.ip';

@Controller('survey')
export class SurveyController {
  constructor(
    @Inject(FINDALL_SURVEY_INBOUND_PORT)
    private readonly findAllSurveyInPort: FindAllSurveyInPort,
    @Inject(FINDONE_SURVEY_INBOUND_PORT)
    private readonly findOneSurveyInPort: FindOneSurveyInPort,
    @Inject(CREATE_SURVEY_INBOUND_PORT)
    private readonly createSurveyInPort: CreateSurveyInPort,
    @Inject(UPDATE_SURVEY_INBOUND_PORT)
    private readonly updateSurveyInPort: UpdateSurveyInPort,
    @Inject(DELETE_SURVEY_INBOUND_PORT)
    private readonly deleteSurveyInPort: DeleteSurveyInPort,
    @Inject(SEARCH_SURVEY_INBOUND_PORT)
    private readonly searchSurveyInPort: SearchSurveyInPort,
  ) {}

  @Get('')
  findAll(@Body() inportDto: SurveyFindAllInPortInputDto) {
    console.log('inportDto : ', inportDto);
    return this.findAllSurveyInPort.execute({ page: 1, size: 3, sort: 'ASC' });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneSurveyInPort.execute(id);
  }

  @Get('search')
  search(@Param('id', ParseIntPipe) id: number) {
    // return this.searchSurveyInPort.execute(id);
  }

  @Post(':id')
  create(@Param('id', ParseIntPipe) id: number) {
    // return this.createSurveyInPort.execute();
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number) {
    // return this.updateSurveyInPort.execute(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteSurveyInPort.execute(id);
  }
}
