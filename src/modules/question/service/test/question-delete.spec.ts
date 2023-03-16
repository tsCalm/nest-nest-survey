import {
  DeleteQuestionOutPort,
  QuestionDeleteOutPortInputDto,
  QuestionDeleteOutPortOutputDto,
} from '../../out-port/question-delete.op';
import { QuestionDeleteInPortInputDto } from '../../in-port/question-delete.ip';
import { QuestionDeleteService } from '../question-delete.service';

type QuestionList = Array<{
  id: number;
  survey_id: number;
  question_number: number;
  text: string;
  type: string;
}>;

class MockDeleteOutPort implements DeleteQuestionOutPort {
  private readonly result: QuestionList;

  constructor(result: QuestionList) {
    this.result = result;
  }

  async execute(
    params: QuestionDeleteOutPortInputDto,
  ): Promise<QuestionDeleteOutPortOutputDto> {
    const findedQuestion = this.result.find(
      (question) => question.id === params,
    );
    if (!findedQuestion) return 0;
    return 1;
  }
}

describe('질문 삭제', () => {
  const questionList: QuestionList = [
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
  const existIdDeleteParam: QuestionDeleteInPortInputDto = 1;
  const notExistIdDeleteParam: QuestionDeleteInPortInputDto = 4;
  const DeleteQuestionService = new QuestionDeleteService(
    new MockDeleteOutPort(questionList),
  );
  test('존재하는 질문 삭제', async () => {
    const res = await DeleteQuestionService.execute(existIdDeleteParam);

    expect(res).toBe(1);
  });

  test('존재하지 않는 질문 삭제', async () => {
    const res = await DeleteQuestionService.execute(notExistIdDeleteParam);

    expect(res).toBe(0);
  });
});
