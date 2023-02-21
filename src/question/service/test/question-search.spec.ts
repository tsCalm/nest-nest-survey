import {
  QuestionSearchInPortInputDto,
  QuestionSearchInPortOutputDto,
} from 'src/question/in-port/question-search.ip';
import {
  QuestionSearchOutPortInputDto,
  QuestionSearchOutPortOutputDto,
  SearchQuestionOutPort,
} from 'src/question/out-port/question-search.op';
import { QuestionSearchService } from '../question-search.service';

class MockSearchOutPort implements SearchQuestionOutPort {
  private readonly result: QuestionSearchOutPortOutputDto;

  constructor(result: QuestionSearchOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: QuestionSearchOutPortInputDto,
  ): Promise<QuestionSearchOutPortOutputDto> {
    return this.result.filter((question) =>
      question.text.includes(params.keyword),
    );
  }
}

describe('설문지 리스트를 반환한다.', () => {
  const surveyList: QuestionSearchInPortOutputDto = [
    {
      id: 1,
      survey_id: 1,
      question_number: 1,
      text: '당신이 가장 선호하는 개발 언어는?',
      type: 'number',
    },
    {
      id: 2,
      survey_id: 1,
      question_number: 2,
      text: '당신이 가장 선호하는 개발 공부 방법은?',
      type: 'number',
    },
    {
      id: 3,
      survey_id: 1,
      question_number: 3,
      text: '당신이 가장 선호하는 회사 위치는?',
      type: 'number',
    },
  ];

  const params: QuestionSearchInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
    keyword: '회사',
  };
  const SearchQuestionService = new QuestionSearchService(
    new MockSearchOutPort(surveyList),
  );
  test('질문 검색 목록', async () => {
    const SearchResult = await SearchQuestionService.execute(params);

    expect(SearchResult).toStrictEqual([
      {
        id: 3,
        survey_id: 1,
        question_number: 3,
        text: '당신이 가장 선호하는 회사 위치는?',
        type: 'number',
      },
    ]);
  });
});
