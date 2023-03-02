// 인바운드 포트, 아웃바운드 포트의 값이 같은 경우 이곳에서 관리
import { SORT_OPTION } from '../../common/enum';
import { Respondent } from '../respondent.entity';

//findall
export type RespondentFindAllInPut = Omit<RespondentSearchInPut, 'keyword'>;
export type RespondentFindAllOutPut = [
  Array<Omit<Respondent, 'created_at' | 'updated_at' | 'responses'>>,
  number,
];

//search
export type RespondentSearchInPut = {
  page: number;
  size: number;
  sort: SORT_OPTION;
  keyword: string;
};

export type RespondentSearchOutPut = [
  Array<Omit<Respondent, 'created_at' | 'updated_at' | 'responses'>>,
  number,
];

//findone
export type RespondentFindOneInPut = number;
export type RespondentFindOneOutPut = Omit<
  Respondent,
  'created_at' | 'updated_at'
>;

//create
export type RespondentCreateInPut = {
  name: string;
  email: string;
};
export type RespondentCreateOutPut = Omit<
  Respondent,
  'created_at' | 'updated_at' | 'responses'
>;
