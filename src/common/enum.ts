export enum SORT_OPTION {
  ASC = 'ASC',
  DESC = 'DESC',
}

// @Get('find')
// async findAll(
//   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
//   @Query('size', new DefaultValuePipe(10), ParseIntPipe) size: number,
//   @Query(
//     'sort',
//     new DefaultValuePipe(SORT_OPTION.ASC),
//     new ParseEnumPipe(SORT_OPTION),
//   )
//   sort: SORT_OPTION,
// ) {
//   const result = await this.findAllSurveyInPort.execute({
//     page,
//     size,
//     sort,
//   });
//   this.findValidate(result, '설문지가 존재하지 않습니다.');
//   return result;
// }
