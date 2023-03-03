import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Inject,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { SORT_OPTION } from '../common/enum';
import { ErrorController } from '../common/error-controller';
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
export class RespondentController extends ErrorController {
  constructor(
    @Inject(FINDALL_RESPONDENT_INBOUND_PORT)
    private readonly _findAllRespondentInPort: FindAllRespondentInPort,
    @Inject(FINDONE_RESPONDENT_INBOUND_PORT)
    private readonly _findOneRespondentInPort: FindOneRespondentInPort,
    @Inject(CREATE_RESPONDENT_INBOUND_PORT)
    private readonly _createRespondentInPort: CreateRespondentInPort,
    @Inject(SEARCH_RESPONDENT_INBOUND_PORT)
    private readonly _searchRespondentInPort: SearchRespondentInPort,
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
    const result = await this._findAllRespondentInPort.execute({
      page,
      size,
      sort,
    });
    this.isEmptyArray(result[0], '설문참여 유저가 존재하지 않습니다.');
    return result;
  }

  @Get('find/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this._findOneRespondentInPort.execute(id);
    this.isEmpty(result, `id: ${id} 설문참여 유저를 찾을 수 없습니다.`);
    return result;
  }

  @Get('/search')
  search(
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
    return this._searchRespondentInPort.execute({
      keyword,
      page,
      size,
      sort,
    });
  }

  @Post('create')
  create(@Body() surveyCreateDto: RespondentCreateDto) {
    return this._createRespondentInPort.execute(surveyCreateDto);
  }
}
