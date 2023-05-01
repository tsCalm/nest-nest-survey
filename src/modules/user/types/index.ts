import { SORT_OPTION } from '../../../common/enum';
import { User } from '../user.entity';

export type UserFindAllInput = {};
export type UserFindAllOutPut = [];

//search
export type UserSearchInPut = {
  page: number;
  size: number;
  sort: SORT_OPTION;
  keyword: string;
};

export type UserSearchOutPut = [
  Array<Omit<User, 'created_at' | 'updated_at'>>,
  number,
];

//findone
export type UserFindOneInPut = number;
export type UserFindOneOutPut = Omit<User, 'created_at' | 'updated_at'>;

//create
export type UserCreateInPut = {
  email: string;
  password: string;
  name: string;
  address: string;
  address_etc?: string;
  birth: Date;
  tel: string;
};
export type UserCreateOutPut = Omit<User, 'created_at' | 'updated_at'>;

//update
export type UserUpdateInPut = {
  id: number;
  name?: string;
  description?: string;
};
export type UserUpdateOutPut = Omit<User, 'created_at' | 'updated_at'>;

//delete
export type UserDelteInPut = number;
export type UserDelteOutPut = number;
