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
  Query,
} from '@nestjs/common';
import { QuestionCreateDto } from './dto/question-create.dto';
import { QuestionUpdateDto } from './dto/question-update.dto';
import {
  CreateQuestionInPort,
  CREATE_QUESTION_INBOUND_PORT,
} from './in-port/question-create.ip';
import {
  DeleteQuestionInPort,
  DELETE_QUESTION_INBOUND_PORT,
} from './in-port/question-delete.ip';
import {
  FindAllQuestionInPort,
  FINDALL_QUESTION_INBOUND_PORT,
} from './in-port/question-findall.ip';
import {
  FindOneQuestionInPort,
  FINDONE_QUESTION_INBOUND_PORT,
} from './in-port/question-findone.ip';
import {
  SearchQuestionInPort,
  SEARCH_QUESTION_INBOUND_PORT,
} from './in-port/question-search.ip';
import {
  UpdateQuestionInPort,
  UPDATE_QUESTION_INBOUND_PORT,
} from './in-port/question-update.ip';

@Controller('question')
export class QuestionController {
  constructor(
    @Inject(FINDALL_QUESTION_INBOUND_PORT)
    private readonly findAllQuestionInPort: FindAllQuestionInPort,
    @Inject(FINDONE_QUESTION_INBOUND_PORT)
    private readonly findOneQuestionInPort: FindOneQuestionInPort,
    @Inject(CREATE_QUESTION_INBOUND_PORT)
    private readonly createQuestionInPort: CreateQuestionInPort,
    @Inject(UPDATE_QUESTION_INBOUND_PORT)
    private readonly updateQuestionInPort: UpdateQuestionInPort,
    @Inject(DELETE_QUESTION_INBOUND_PORT)
    private readonly deleteQuestionInPort: DeleteQuestionInPort,
    @Inject(SEARCH_QUESTION_INBOUND_PORT)
    private readonly searchQuestionInPort: SearchQuestionInPort,
  ) {}

  @Get('')
  findAll() {
    return this.findAllQuestionInPort.execute({
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Get(':id/all')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneQuestionInPort.execute(id);
  }

  @Get('/search')
  search() {
    return this.searchQuestionInPort.execute({
      keyword: '선호',
      page: 1,
      size: 10,
      sort: 'ASC',
    });
  }

  @Post('create')
  create(@Body() surveyCreateDto: QuestionCreateDto) {
    return this.createQuestionInPort.execute(surveyCreateDto);
  }

  @Patch(':id')
  update(@Body() surveyUpdateDto: QuestionUpdateDto) {
    return this.updateQuestionInPort.execute(surveyUpdateDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteQuestionInPort.execute(id);
  }
}
