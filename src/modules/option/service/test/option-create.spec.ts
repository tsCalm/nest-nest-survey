import {
  OptionCreateInPortInputDto,
  OptionCreateInPortOutputDto,
} from '../../in-port/option-create.ip';
import {
  CreateOptionOutPort,
  OptionCreateOutPortInputDto,
  OptionCreateOutPortOutputDto,
} from '../../out-port/option-create.op';
import { OptionCreateService } from '../option-create.service';

class MockCreateOutPort implements CreateOptionOutPort {
  private readonly result: OptionCreateOutPortOutputDto;

  constructor(params: OptionCreateOutPortInputDto) {
    this.result = {
      id: 1,
      ...params,
    };
  }

  async execute(
    params: OptionCreateOutPortInputDto,
  ): Promise<OptionCreateOutPortOutputDto> {
    return this.result;
  }
}

describe('선택지를 생성한다.', () => {
  const option: OptionCreateInPortOutputDto = {
    id: 1,
    question_id: 1,
    option_number: 1,
    text: 'javascript',
  };
  const params: OptionCreateInPortInputDto = {
    question_id: 1,
    option_number: 1,
    text: 'javascript',
  };
  const CreateOptionService = new OptionCreateService(
    new MockCreateOutPort(params),
  );

  test('선택지 생성.', async () => {
    const createResult = await CreateOptionService.execute(params);

    expect(createResult).toStrictEqual(option);
  });
});
