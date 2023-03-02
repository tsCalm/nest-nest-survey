import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindAllRespondentOutPort,
  RespondentFindAllOutPortInputDto,
  RespondentFindAllOutPortOutputDto,
} from '../out-port/respondent-findall.op';
import { Respondent } from '../respondent.entity';

export class FindAllRespondentRepository implements FindAllRespondentOutPort {
  constructor(
    @InjectRepository(Respondent)
    private readonly _respondentRepo: Repository<Respondent>,
  ) {}

  execute(
    params: RespondentFindAllOutPortInputDto,
  ): Promise<RespondentFindAllOutPortOutputDto> {
    return this._respondentRepo.findAndCount({
      skip: (params.page - 1) * params.size,
      take: params.size,
      order: {
        id: params.sort,
      },
    });
  }
}
