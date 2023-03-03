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
import {
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorController } from 'src/common/error-controller';
import { NotFoundRes, ResOkObj, ResOkObjList } from 'src/common/swagger';
import { SORT_OPTION } from '../common/enum';
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
import { Survey } from './survey.entity';

@Controller('survey')
@ApiTags('survey')
@ApiExtraModels(Survey)
export class SurveyController extends ErrorController {
  constructor(
    @Inject(FINDALL_SURVEY_INBOUND_PORT)
    private readonly _findAllSurveyInPort: FindAllSurveyInPort,
    @Inject(FINDONE_SURVEY_INBOUND_PORT)
    private readonly _findOneSurveyInPort: FindOneSurveyInPort,
    @Inject(CREATE_SURVEY_INBOUND_PORT)
    private readonly _createSurveyInPort: CreateSurveyInPort,
    @Inject(UPDATE_SURVEY_INBOUND_PORT)
    private readonly _updateSurveyInPort: UpdateSurveyInPort,
    @Inject(DELETE_SURVEY_INBOUND_PORT)
    private readonly _deleteSurveyInPort: DeleteSurveyInPort,
    @Inject(SEARCH_SURVEY_INBOUND_PORT)
    private readonly _searchSurveyInPort: SearchSurveyInPort,
  ) {
    super();
  }

  @Get('find')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'size', required: false })
  @ApiQuery({ name: 'sort', enum: SORT_OPTION, required: false })
  @ApiNotFoundResponse({ description: 'Not Found Error' })
  @ResOkObjList(Survey)
  @ApiOperation({
    summary: '설문지 리스트 요청',
    description: '설문지 리스트를 페이지 단위로 요청합니다.',
  })
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
    const result = await this._findAllSurveyInPort.execute({
      page,
      size,
      sort,
    });
    this.isEmptyArray(result[0], '설문지가 존재하지 않습니다.');
    return result;
  }

  @Get('find/:id')
  @ApiParam({ name: 'id', required: true })
  @ApiOperation({
    summary: '설문지 상세 요청',
    description: '하나의 설문지에 속한 질문과 선택지 목록을 함께 반환합니다.',
  })
  @ResOkObj(Survey)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this._findOneSurveyInPort.execute(id);
    this.isEmpty(result, `id: ${id} 설문지를 찾을 수 없습니다.`);
    return result;
  }

  @Get('/search')
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'size', required: false })
  @ApiQuery({ name: 'sort', enum: SORT_OPTION, required: false })
  @ApiQuery({ name: 'keyword', required: false })
  @ApiOperation({
    summary: '설문지 검색',
    description:
      '설문지를 검색한 후 검색된 설문지 리스트를 페이지 단위로 요청합니다.',
  })
  async search(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
    @Query(
      'sort',
      new DefaultValuePipe(SORT_OPTION.ASC),
      new ParseEnumPipe(SORT_OPTION),
    )
    sort: SORT_OPTION,
    @Query('keyword', new DefaultValuePipe(''))
    keyword: string,
  ) {
    const result = await this._searchSurveyInPort.execute({
      keyword,
      page,
      size,
      sort,
    });
    this.isEmptyArray(result[0], '설문지가 존재하지 않습니다.');
    return result;
  }

  @Post('create')
  @ApiOperation({
    summary: '설문지 생성',
    description: '설문지를 생성한 후 생성된 설문지를 반환합니다.',
  })
  async create(@Body() surveyCreateDto: SurveyCreateDto) {
    const result = await this._createSurveyInPort.execute(surveyCreateDto);
    this.isEmpty(result, `설문지 생성에 실패했습니다.`);
    return result;
  }

  @Patch('update/:id')
  @ApiParam({ name: 'id', required: true })
  @ApiOperation({
    summary: '설문지 업데이트',
    description:
      '설문지 이름, 설명을 업데이트한 후 업데이트된 설문지를 반환합니다.',
  })
  async update(
    @Body() surveyUpdateDto: SurveyUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const result = await this._updateSurveyInPort.execute({
      ...surveyUpdateDto,
      id,
    });
    this.isEmpty(result, `id: ${id} 설문지를 찾을 수 없습니다.`);
    return result;
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id', required: true })
  @ApiOperation({
    summary: '설문지 삭제',
    description: '설문지를 삭제한 후 삭제한 결과를 리턴합니다.',
  })
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this._deleteSurveyInPort.execute(id);
    // this.queryResultValidate(result);
    return result;
  }
}
