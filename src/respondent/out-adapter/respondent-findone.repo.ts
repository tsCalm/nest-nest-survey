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
    private readonly questionRepo: Repository<Respondent>,
  ) {}

  execute(
    params: RespondentFindOneOutPortInputDto,
  ): Promise<RespondentFindOneOutPortOutputDto> {
    return this.questionRepo.findOne({
      where: {
        id: params,
      },
    });
  }
}
