import { Inject, Injectable } from '@nestjs/common';
import {
  RedisStringSetOutPort,
  REDIS_STRING_SET_OUTBOUND_PORT,
} from '../../cache-module/string/out-port/redis-string-set.op';
import {
  RedisStringGetOutPort,
  REDIS_STRING_GET_OUTBOUND_PORT,
} from '../../cache-module/string/out-port/redis-string-get.op';
import {
  FindOneSurveyInPort,
  SurveyFindOneInPortInputDto,
  SurveyFindOneInPortOutputDto,
} from '../in-port/survey-findone.ip';
import {
  FindOneSurveyOutPort,
  FINDONE_SURVEY_OUTBOUND_PORT,
} from '../out-port/survey-findone.op';
import { Survey } from '../survey.entity';

@Injectable()
export class SurveyFindOneService implements FindOneSurveyInPort {
  constructor(
    @Inject(REDIS_STRING_SET_OUTBOUND_PORT)
    private readonly _redisStringSet: RedisStringSetOutPort,
    @Inject(REDIS_STRING_GET_OUTBOUND_PORT)
    private readonly _redisStringGet: RedisStringGetOutPort,
    @Inject(FINDONE_SURVEY_OUTBOUND_PORT)
    private readonly _findOneSurveyOutPort: FindOneSurveyOutPort,
  ) {}

  async execute(
    params: SurveyFindOneInPortInputDto,
  ): Promise<SurveyFindOneInPortOutputDto> {
    const findedCache = await this._redisStringGet.execute(`survey:${params}`);
    if (findedCache) {
      return JSON.parse(findedCache) as SurveyFindOneInPortOutputDto;
    }
    const findedResult = await this._findOneSurveyOutPort.execute(params);
    const setCache = await this._redisStringSet.execute({
      key: `survey:${params}`,
      value: JSON.stringify(findedResult),
    });
    if (setCache !== 'OK') {
      // cache failed log
    }
    return findedResult;
  }
}
