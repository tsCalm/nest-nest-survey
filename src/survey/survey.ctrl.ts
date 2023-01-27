import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('survey')
export class SurveyController {
  @Get()
  findAll() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
