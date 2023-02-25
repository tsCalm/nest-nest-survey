import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Inject,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ErrorController } from 'src/common/error-controller';
import { SurveyCreateDto } from './dto/survey-create.dto';
import { SurveyUpdateDto } from './dto/survey-update.dto';
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
import { SORT_OPTION } from '../common/enum';

@Controller('survey')
export class SurveyController extends ErrorController {
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
  ) {
    super();
  }

  @Get('find')
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
    @Query(
      'sort',
      new DefaultValuePipe(SORT_OPTION.ASC),
      new ParseEnumPipe(SORT_OPTION),
    )
    sort: SORT_OPTION,
  ) {
    const result = await this.findAllSurveyInPort.execute({
      page,
      size,
      sort,
    });
    this.isEmptyArray(result, '설문지가 존재하지 않습니다.');
    return result;
  }

  @Get('find/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.findOneSurveyInPort.execute(id);
    this.isEmpty(result, `id: ${id} 설문지를 찾을 수 없습니다.`);
    return result;

    // return new ResponseClass(result, 200);
  }

  @Get('/search')
  async search(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
    @Query(
      'sort',
      new DefaultValuePipe(SORT_OPTION.ASC),
      new ParseEnumPipe(SORT_OPTION),
    )
    sort: SORT_OPTION,
    @Query('sort', new DefaultValuePipe(''))
    keyword: string,
  ) {
    const result = await this.searchSurveyInPort.execute({
      keyword,
      page,
      size,
      sort,
    });
    this.isEmptyArray(result, '설문지가 존재하지 않습니다.');
    return result;
  }

  @Post('create')
  async create(@Body() surveyCreateDto: SurveyCreateDto) {
    const result = await this.createSurveyInPort.execute(surveyCreateDto);
    // this.queryResultValidate(result);
    this.isEmpty(result, `설문지 생성에 실패했습니다.`);
    return result;
  }

  @Patch('update/:id')
  async update(
    @Body() surveyUpdateDto: SurveyUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    // return { ...surveyUpdateDto, id };
    const result = await this.updateSurveyInPort.execute({
      ...surveyUpdateDto,
      id,
    });
    // this.queryResultValidate(result);
    this.isEmpty(result, `id: ${id} 설문지를 찾을 수 없습니다.`);
    return result;
  }

  @Delete('delete/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.deleteSurveyInPort.execute(id);
    // this.queryResultValidate(result);
    return result;
  }
}
