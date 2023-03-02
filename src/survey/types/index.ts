// 인바운드 포트, 아웃바운드 포트의 값이 같은 경우 이곳에서 관리
import { SORT_OPTION } from '../../common/enum';
import { Survey } from '../survey.entity';

//findall
export type SurveyFindAllInPut = Omit<SurveySearchInPut, 'keyword'>;
export type SurveyFindAllOutPut = [
  Array<Omit<Survey, 'created_at' | 'updated_at' | 'question'>>,
  number,
];

//search
export type SurveySearchInPut = {
  page: number;
  size: number;
  sort: SORT_OPTION;
  keyword: string;
};

export type SurveySearchOutPut = [
  Array<Omit<Survey, 'created_at' | 'updated_at' | 'question'>>,
  number,
];

//findone
export type SurveyFindOneInPut = number;
export type SurveyFindOneOutPut = Omit<Survey, 'created_at' | 'updated_at'>;

//create
export type SurveyCreateInPut = {
  name: string;
  description: string;
};
export type SurveyCreateOutPut = Omit<
  Survey,
  'created_at' | 'updated_at' | 'question'
>;

//update
export type SurveyUpdateInPut = {
  id: number;
  name?: string;
  description?: string;
};
export type SurveyUpdateOutPut = Omit<
  Survey,
  'created_at' | 'updated_at' | 'question'
>;

//delete
export type SurveyDelteInPut = number;
export type SurveyDelteOutPut = number;
