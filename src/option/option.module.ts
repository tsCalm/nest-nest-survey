import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_OPTION_INBOUND_PORT } from './in-port/option-create.ip';
import { DELETE_OPTION_INBOUND_PORT } from './in-port/option-delete.ip';

import { UPDATE_OPTION_INBOUND_PORT } from './in-port/option-update.ip';
import { OptionController } from './option.ctrl';
import { Option } from './option.entity';
import { CreateOptionRepository } from './out-adapter/option-create.repo';
import { DeleteOptionRepository } from './out-adapter/option-delete.repo';

import { UpdateOptionRepository } from './out-adapter/option-update.repo';
import { CREATE_OPTION_OUTBOUND_PORT } from './out-port/option-create.op';
import { DELETE_OPTION_OUTBOUND_PORT } from './out-port/option-delete.op';

import { UPDATE_OPTION_OUTBOUND_PORT } from './out-port/option-update.op';
import { OptionCreateService } from './service/option-create.service';
import { OptionDeleteService } from './service/option-delete.service';

import { OptionUpdateService } from './service/option-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  controllers: [OptionController],
  providers: [
    {
      provide: CREATE_OPTION_INBOUND_PORT,
      useClass: OptionCreateService,
    },
    {
      provide: CREATE_OPTION_OUTBOUND_PORT,
      useClass: CreateOptionRepository,
    },
    {
      provide: UPDATE_OPTION_INBOUND_PORT,
      useClass: OptionUpdateService,
    },
    {
      provide: UPDATE_OPTION_OUTBOUND_PORT,
      useClass: UpdateOptionRepository,
    },
    {
      provide: DELETE_OPTION_INBOUND_PORT,
      useClass: OptionDeleteService,
    },
    {
      provide: DELETE_OPTION_OUTBOUND_PORT,
      useClass: DeleteOptionRepository,
    },
  ],
})
export class OptionModule {}
