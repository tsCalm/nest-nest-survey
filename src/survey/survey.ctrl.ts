import {
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
  findAll() {
    console.log('findall');
    return this.findAllSurveyInPort.execute({ page: 1, size: 10, sort: 'ASC' });
  }

  @Get(':id/all')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneSurveyInPort.execute(id);
  }

  @Get('/search')
  search() {
    console.log('search');
    return this.searchSurveyInPort.execute({
      keyword: 'test',
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Post('create')
  create() {
    return null;
  }

  @Patch(':id')
  update() {
    return null;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return null;
  }
}
