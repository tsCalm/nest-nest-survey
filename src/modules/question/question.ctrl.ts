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
    private readonly _createQuestionInPort: CreateQuestionInPort,
    @Inject(UPDATE_QUESTION_INBOUND_PORT)
    private readonly _updateQuestionInPort: UpdateQuestionInPort,
    @Inject(DELETE_QUESTION_INBOUND_PORT)
    private readonly _deleteQuestionInPort: DeleteQuestionInPort,
  ) {}

  @Post('create')
  create(@Body() surveyCreateDto: QuestionCreateDto) {
    return this._createQuestionInPort.execute(surveyCreateDto);
  }

  @Patch('update/:id')
  update(
    @Body() surveyUpdateDto: QuestionUpdateDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this._updateQuestionInPort.execute({
      ...surveyUpdateDto,
      id,
    });
  }

  @Delete('delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this._deleteQuestionInPort.execute(id);
  }
}
