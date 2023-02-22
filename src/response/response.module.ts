import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_RESPONSE_INBOUND_PORT } from './in-port/response-create.ip';
import { CreateResponseRepository } from './out-adapter/response-create.repo';
import { CREATE_RESPONSE_OUTBOUND_PORT } from './out-port/response-create.op';
import { ResponseController } from './response.ctrl';
import { Response } from './response.entity';
import { ResponseCreateService } from './service/response-create.service';

@Module({
  imports: [TypeOrmModule.forFeature([Response])],
  controllers: [ResponseController],
  providers: [
    {
      provide: CREATE_RESPONSE_INBOUND_PORT,
      useClass: ResponseCreateService,
    },
    {
      provide: CREATE_RESPONSE_OUTBOUND_PORT,
      useClass: CreateResponseRepository,
    },
  ],
})
export class ResponseModule {}
