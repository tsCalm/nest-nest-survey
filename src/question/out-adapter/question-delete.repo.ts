import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import {
  DeleteQuestionOutPort,
  QuestionDeleteOutPortInputDto,
  QuestionDeleteOutPortOutputDto,
} from '../out-port/question-delete.op';
import { Question } from '../question.entity';

export class DeleteQuestionRepository implements DeleteQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly _questionRepo: Repository<Question>,
  ) {}

  async execute(
    params: QuestionDeleteOutPortInputDto,
  ): Promise<QuestionDeleteOutPortOutputDto> {
    const result: DeleteResult = await this._questionRepo.delete(params);
    // DeleteResult { raw: [], affected: 1 }
    return result.affected;
  }
}
