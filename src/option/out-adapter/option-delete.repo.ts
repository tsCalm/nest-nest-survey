import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  DeleteOptionOutPort,
  OptionDeleteOutPortInputDto,
  OptionDeleteOutPortOutputDto,
} from '../out-port/option-delete.op';
export class DeleteOptionRepository implements DeleteOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepo: Repository<Option>,
  ) {}

  async execute(
    params: OptionDeleteOutPortInputDto,
  ): Promise<OptionDeleteOutPortOutputDto> {
    const result: DeleteResult = await this.optionRepo.delete(params);
    // DeleteResult { raw: [], affected: 1 }
    return result.affected;
  }
}
