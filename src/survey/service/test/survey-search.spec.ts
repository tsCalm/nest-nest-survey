import {
  SurveySearchOutPortInputDto,
  SurveySearchOutPortOutputDto,
} from '../../out-port/survey-search.op';
import { SurveySearchService } from '../survey-Search.service';

// class MockSearchOutPort implements SearchSurveyOutPort {
//   private readonly result: SurveySearchOutPortOutputDto;

//   constructor(
//     params: SurveySearchOutPortInputDto,
//     result: SurveySearchOutPortOutputDto,
//   ) {
//     this.result = result;
//   }

//   async execute(
//     params: SurveySearchOutPortInputDto,
//   ): Promise<SurveySearchOutPortOutputDto> {
//     return this.result;
//   }
// }

describe('설문지 리스트를 반환한다.', () => {
  const surveyList: SurveySearchOutPortOutputDto = [
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
  ];

  const params: SurveySearchOutPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
    keyword: '백엔드',
  };
  const SearchSurveyService = new SurveySearchService();
  // new MockSearchOutPort(
  //   params,
  //   surveyList,
  // );
  test('설문지 검색 목록', async () => {
    const SearchResult = await SearchSurveyService.execute(params);

    expect(SearchResult).toStrictEqual([
      {
        id: 1,
        name: '당신이 선호하는 백엔드 언어는?',
        description:
          '백엔드 개발자가 선호하는 언어를 조사하기 위한 설문지입니다.',
      },
    ]);
  });
});
