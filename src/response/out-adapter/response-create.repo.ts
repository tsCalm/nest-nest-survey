import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateResponseOutPort,
  ResponseCreateOutPortInputDto,
  ResponseCreateOutPortOutputDto,
} from '../out-port/response-create.op';
import { Response } from '../response.entity';
export class CreateResponseRepository implements CreateResponseOutPort {
  constructor(
    @InjectRepository(Response)
    private readonly respondentRepo: Repository<Response>,
  ) {}

  execute(
    params: ResponseCreateOutPortInputDto,
  ): Promise<ResponseCreateOutPortOutputDto> {
    return this.respondentRepo.save(params);
  }
}
