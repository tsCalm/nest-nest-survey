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
    private readonly _resRepo: Repository<Response>,
  ) {}

  async execute(
    params: ResponseCreateOutPortInputDto,
  ): Promise<ResponseCreateOutPortOutputDto> {
    return await this._resRepo.save(params);
  }
}
