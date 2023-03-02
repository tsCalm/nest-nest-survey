import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FindOneRespondentOutPort,
  RespondentFindOneOutPortInputDto,
  RespondentFindOneOutPortOutputDto,
} from '../out-port/respondent-findone.op';
import { Respondent } from '../respondent.entity';

export class FindOneRespondentRepository implements FindOneRespondentOutPort {
  constructor(
    @InjectRepository(Respondent)
    private readonly _respondentRepo: Repository<Respondent>,
  ) {}

  execute(
    params: RespondentFindOneOutPortInputDto,
  ): Promise<RespondentFindOneOutPortOutputDto> {
    return this._respondentRepo.findOne({
      where: {
        id: params,
      },
      relations: {
        responses: true,
      },
    });
  }
}
