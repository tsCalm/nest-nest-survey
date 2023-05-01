import { UserCreateInPut, UserCreateOutPut } from '../types';

export type UserCreateOutPortInputDto = UserCreateInPut;
export type UserCreateOutPortOutputDto = UserCreateOutPut;

export const CREATE_USER_OUTBOUND_PORT = 'CREATE_USER_OUTBOUND_PORT' as const;

export interface CreateUserOutPort {
  execute(
    params: UserCreateOutPortInputDto,
  ): Promise<UserCreateOutPortOutputDto>;
}
