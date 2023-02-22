import {
  RespondentSearchInPortInputDto,
  RespondentSearchInPortOutputDto,
} from 'src/respondent/in-port/respondent-search.ip';
import {
  RespondentSearchOutPortInputDto,
  RespondentSearchOutPortOutputDto,
  SearchRespondentOutPort,
} from 'src/respondent/out-port/respondent-search.op';
import { RespondentSearchService } from '../respondent-search.service';

class MockSearchOutPort implements SearchRespondentOutPort {
  private readonly result: RespondentSearchOutPortOutputDto;

  constructor(result: RespondentSearchOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: RespondentSearchOutPortInputDto,
  ): Promise<RespondentSearchOutPortOutputDto> {
    return this.result.filter((question) =>
      question.name.includes(params.keyword),
    );
  }
}

describe('설문 참여 유저 찾기', () => {
  const surveyList: RespondentSearchInPortOutputDto = [
    {
      id: 1,
      name: '홍길동',
      email: 'gd1600@gmail.com',
    },
    {
      id: 2,
      name: '김연아',
      email: 'w_number_one@gmail.com',
    },
    {
      id: 3,
      name: '손흥민',
      email: 'k_number_one@gmail.com',
    },
  ];

  const params: RespondentSearchInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
    keyword: '흥민',
  };
  const SearchRespondentService = new RespondentSearchService(
    new MockSearchOutPort(surveyList),
  );
  test('참여 유저 검색', async () => {
    const SearchResult = await SearchRespondentService.execute(params);

    expect(SearchResult).toStrictEqual([
      {
        id: 3,
        name: '손흥민',
        email: 'k_number_one@gmail.com',
      },
    ]);
  });
});
