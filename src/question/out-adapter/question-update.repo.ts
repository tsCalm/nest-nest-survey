import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  QuestionUpdateOutPortInputDto,
  QuestionUpdateOutPortOutputDto,
  UpdateQuestionOutPort,
} from '../out-port/question-update.op';
import { Question } from '../question.entity';

export class UpdateQuestionRepository implements UpdateQuestionOutPort {
  constructor(
    @InjectRepository(Question)
    private readonly _questionRepo: Repository<Question>,
  ) {}

  async execute(
    params: QuestionUpdateOutPortInputDto,
  ): Promise<QuestionUpdateOutPortOutputDto> {
    const findedQuestion = await this._questionRepo.findOne({
      where: {
        id: params.id,
      },
    });
    return this._questionRepo.save({ ...findedQuestion, ...params });
  }
}
