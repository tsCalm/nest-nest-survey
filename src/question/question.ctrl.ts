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
  UpdateQuestionInPort,
  UPDATE_QUESTION_INBOUND_PORT,
} from './in-port/question-update.ip';

@Controller('question')
export class QuestionController {
  constructor(
    @Inject(CREATE_QUESTION_INBOUND_PORT)
    private readonly createQuestionInPort: CreateQuestionInPort,
    @Inject(UPDATE_QUESTION_INBOUND_PORT)
    private readonly updateQuestionInPort: UpdateQuestionInPort,
    @Inject(DELETE_QUESTION_INBOUND_PORT)
    private readonly deleteQuestionInPort: DeleteQuestionInPort,
  ) {}

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
