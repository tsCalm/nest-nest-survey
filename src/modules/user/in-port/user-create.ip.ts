import { UserCreateInPut, UserCreateOutPut } from '../types';

export type UserCreateInPortInputDto = UserCreateInPut;
export type UserCreateInPortOutputDto = UserCreateOutPut;

// provider token
export const CREATE_USER_INBOUND_PORT = 'CREATE_USER_INBOUND_PORT' as const;

export interface CreateUserInPort {
  execute(params: UserCreateInPortInputDto): Promise<UserCreateInPortOutputDto>;
}
//
