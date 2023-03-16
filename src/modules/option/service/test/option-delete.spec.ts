import { OptionDeleteInPortInputDto } from '../../in-port/option-delete.ip';
import {
  DeleteOptionOutPort,
  OptionDeleteOutPortInputDto,
  OptionDeleteOutPortOutputDto,
} from '../../out-port/option-delete.op';
import { OptionDeleteService } from '../option-delete.service';

type OptionList = Array<{
  id: number;
  question_id: number;
  option_number: number;
  text: string;
}>;

class MockDeleteOutPort implements DeleteOptionOutPort {
  private readonly result: OptionList;

  constructor(result: OptionList) {
    this.result = result;
  }

  async execute(
    params: OptionDeleteOutPortInputDto,
  ): Promise<OptionDeleteOutPortOutputDto> {
    const findedOption = this.result.find((option) => option.id === params);
    if (!findedOption) return 0;
    return 1;
  }
}

describe('질문 삭제', () => {
  const optionList: OptionList = [
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
  const existIdDeleteParam: OptionDeleteInPortInputDto = 1;
  const notExistIdDeleteParam: OptionDeleteInPortInputDto = 4;
  const DeleteOptionService = new OptionDeleteService(
    new MockDeleteOutPort(optionList),
  );
  // new MockDeleteOutPort(optionList);
  test('존재하는 선택지 삭제', async () => {
    const res = await DeleteOptionService.execute(existIdDeleteParam);

    expect(res).toBe(1);
  });

  test('존재하지 않는 선택지 삭제', async () => {
    const res = await DeleteOptionService.execute(notExistIdDeleteParam);

    expect(res).toBe(0);
  });
});
