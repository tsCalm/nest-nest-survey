import {
  OptionFindAllInPortInputDto,
  OptionFindAllInPortOutputDto,
} from 'src/option/in-port/option-findall.ip';
import {
  FindAllOptionOutPort,
  OptionFindAllOutPortInputDto,
  OptionFindAllOutPortOutputDto,
} from 'src/option/out-port/option-findall.op';
import { OptionFindAllService } from '../option-findall.service';

class MockFindAllOutPort implements FindAllOptionOutPort {
  private readonly result: OptionFindAllOutPortOutputDto;

  constructor(
    // params: OptionFindAllOutPortInputDto,
    result: OptionFindAllOutPortOutputDto,
  ) {
    this.result = result;
  }

  async execute(
    params: OptionFindAllOutPortInputDto,
  ): Promise<OptionFindAllOutPortOutputDto> {
    return this.result;
  }
}

describe('질문 리스트를 반환한다.', () => {
  const questionList: OptionFindAllInPortOutputDto = [
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

  const params: OptionFindAllInPortInputDto = {
    page: 1,
    size: 3,
    sort: 'ASC',
  };
  const findAllOptionService = new OptionFindAllService(
    new MockFindAllOutPort(questionList),
  );

  test('선택지 목록', async () => {
    const findallResult = await findAllOptionService.execute(params);

    expect(findallResult).toStrictEqual(questionList);
  });
});
