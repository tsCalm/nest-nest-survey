import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '../option.entity';
import {
  FindAllOptionOutPort,
  OptionFindAllOutPortInputDto,
  OptionFindAllOutPortOutputDto,
} from '../out-port/option-findall.op';

export class FindAllOptionRepository implements FindAllOptionOutPort {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepo: Repository<Option>,
  ) {}

  execute(
    params: OptionFindAllOutPortInputDto,
  ): Promise<OptionFindAllOutPortOutputDto> {
    return this.optionRepo.find({
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        option_number: params.sort,
      },
    });
  }
}
