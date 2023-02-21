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

@Controller('question')
export class QuestionController {
  constructor() {}

  @Get('')
  findAll() {
    return 'question findall';
  }

  @Get(':id/all')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return 'question findone';
  }

  @Get('/search')
  search() {
    return 'question search';
  }

  @Post('create')
  create(@Body() surveyCreateDto: {}) {
    return 'question create';
  }

  @Patch(':id')
  update(@Body() surveyUpdateDto: {}) {
    return 'question update';
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return 'question delete';
  }
}
