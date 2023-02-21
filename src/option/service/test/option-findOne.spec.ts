import {
  OptionFindOneInPortInputDto,
  OptionFindOneInPortOutputDto,
} from 'src/option/in-port/option-findone.ip';
import {
  FindOneOptionOutPort,
  OptionFindOneOutPortInputDto,
  OptionFindOneOutPortOutputDto,
} from 'src/option/out-port/option-findone.op';
import { OptionFindOneService } from '../option-findone.service';

class MockFindAllOutPort implements FindOneOptionOutPort {
  private readonly result: OptionFindOneOutPortOutputDto;

  constructor(result: OptionFindOneOutPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: OptionFindOneOutPortInputDto,
  ): Promise<OptionFindOneOutPortOutputDto> {
    return this.result;
  }
}

describe('선택지 상세정보를 반환한다.', () => {
  const option: OptionFindOneInPortOutputDto = {
    id: 1,
    question_id: 1,
    option_number: 1,
    text: 'javascript',
  };
  const params: OptionFindOneInPortInputDto = 1;
  const findAllOptionService = new OptionFindOneService(
    new MockFindAllOutPort(option),
  );
  test('선택지 상세', async () => {
    const findoneResult = await findAllOptionService.execute(params);

    expect(findoneResult).toStrictEqual(option);
  });
});
