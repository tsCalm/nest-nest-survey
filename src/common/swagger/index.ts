import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';

export class ResObj<T> {
  @ApiProperty()
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export class ResObjList<T> {
  @ApiProperty()
  data: T[];

  @ApiProperty()
  count: number;
  constructor(data: T[], count: number) {
    this.data = data;
    this.count = count;
  }
}

export const ResOkObjList = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResObjList) },
          {
            properties: {
              count: {
                type: 'int',
                default: 10,
              },
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};

export const ResOkObj = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResObj) },
          {
            properties: {
              data: {
                type: 'object',
                properties: {
                  items: { $ref: getSchemaPath(model) },
                },
              },
            },
          },
        ],
      },
    }),
  );
};
