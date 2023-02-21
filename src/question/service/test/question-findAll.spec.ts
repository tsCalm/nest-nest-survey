import {
  QuestionFindAllInPortInputDto,
  QuestionFindAllInPortOutputDto,
} from 'src/question/in-port/question-findall.ip';
import {
  FindAllQuestionOutPort,
  QuestionFindAllOutPortInputDto,
  QuestionFindAllOutPortOutputDto,
} from 'src/question/out-port/question-findall.op';
import { QuestionFindAllService } from '../question-findall.service';

class MockFindAllOutPort implements FindAllQuestionOutPort {
  private readonly result: QuestionFindAllOutPortOutputDto;

  constructor(
    // params: QuestionFindAllOutPortInputDto,
    result: QuestionFindAllOutPortOutputDto,
  ) {
    this.result = result;
  }

  async execute(
    params: QuestionFindAllOutPortInputDto,
  ): Promise<QuestionFindAllOutPortOutputDto> {
    return this.result;
  }
}

describe('질문 리스트를 반환한다.', () => {
  const questionList: QuestionFindAllInPortOutputDto = [
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

  const params: QuestionFindAllInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
  };
  const findAllQuestionService = new QuestionFindAllService(
    new MockFindAllOutPort(questionList),
  );
  // new MockFindAllOutPort(
  //   params,
  //   questionList,
  // );
  test('질문 목록', async () => {
    const findallResult = await findAllQuestionService.execute(params);

    expect(findallResult).toStrictEqual(questionList);
  });
});
