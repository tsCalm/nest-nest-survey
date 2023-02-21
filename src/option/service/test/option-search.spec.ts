import {
  OptionSearchInPortInputDto,
  OptionSearchInPortOutputDto,
} from 'src/option/in-port/option-search.ip';
import {
  OptionSearchOutPortInputDto,
  OptionSearchOutPortOutputDto,
  SearchOptionOutPort,
} from 'src/option/out-port/option-search.op';
import { OptionSearchService } from '../option-search.service';

class MockSearchOutPort implements SearchOptionOutPort {
  private readonly result: OptionSearchOutPortOutputDto;

  constructor(result: OptionSearchOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: OptionSearchOutPortInputDto,
  ): Promise<OptionSearchOutPortOutputDto> {
    return this.result.filter((question) =>
      question.text.includes(params.keyword),
    );
  }
}

describe('설문지 리스트를 반환한다.', () => {
  const surveyList: OptionSearchInPortOutputDto = [
    {
      id: 1,
      question_id: 1,
      option_number: 1,
      text: 'javascript',
    },
    {
      id: 2,
      question_id: 1,
      option_number: 2,
      text: 'typescript',
    },
    {
      id: 3,
      question_id: 1,
      option_number: 3,
      text: 'java',
    },
  ];

  const params: OptionSearchInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
    keyword: 'typescript',
  };
  const SearchOptionService = new OptionSearchService(
    new MockSearchOutPort(surveyList),
  );
  test('선택지 검색 목록', async () => {
    const SearchResult = await SearchOptionService.execute(params);

    expect(SearchResult).toStrictEqual([
      {
        id: 2,
        question_id: 1,
        option_number: 2,
        text: 'typescript',
      },
    ]);
  });
});
