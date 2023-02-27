import { SORT_OPTION } from '../../../common/enum';
import {
  SearchSurveyOutPort,
  SurveySearchOutPortInputDto,
  SurveySearchOutPortOutputDto,
} from 'src/survey/out-port/survey-search.op';
import {
  SurveySearchInPortInputDto,
  SurveySearchInPortOutputDto,
} from '../../in-port/survey-search.ip';
import { SurveySearchService } from '../survey-Search.service';

class MockSearchOutPort implements SearchSurveyOutPort {
  private readonly result: SurveySearchOutPortOutputDto;

  constructor(result: SurveySearchOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: SurveySearchOutPortInputDto,
  ): Promise<SurveySearchOutPortOutputDto> {
    const findedSurvey = this.result[0].filter((survey) =>
      survey.name.includes(params.keyword),
    );
    return [findedSurvey, findedSurvey.length];
  }
}

describe('설문지 리스트를 반환한다.', () => {
  const surveyList: SurveySearchInPortOutputDto = [
    [
      {
        id: 1,
        name: '당신이 선호하는 백엔드 언어는?',
        description:
          '백엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
      },
      {
        id: 2,
        name: '당신이 선호하는 프론트엔드 언어는?',
        description:
          '프론트엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
      },
      {
        id: 3,
        name: '당신이 nodejs 개발자를 선택한 이유는?',
        description:
          '개발자가 자신이 주력으로 사용한 언어를 선택한 이유를 묻는 설문지입니다.',
      },
    ],
    3,
  ];

  const params: SurveySearchInPortInputDto = {
    page: 1,
    size: 3,
    sort: SORT_OPTION.ASC,
    keyword: '백엔드',
  };
  const SearchSurveyService = new SurveySearchService(
    new MockSearchOutPort(surveyList),
  );
  test('설문지 검색 목록', async () => {
    const SearchResult = await SearchSurveyService.execute(params);

    expect(SearchResult).toStrictEqual([
      [
        {
          id: 1,
          name: '당신이 선호하는 백엔드 언어는?',
          description:
            '백엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
        },
      ],
      1,
    ]);
  });
});
