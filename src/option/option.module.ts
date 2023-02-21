import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CREATE_OPTION_INBOUND_PORT } from './in-port/option-create.ip';
import { DELETE_OPTION_INBOUND_PORT } from './in-port/option-delete.ip';
import { FINDALL_OPTION_INBOUND_PORT } from './in-port/option-findall.ip';
import { FINDONE_OPTION_INBOUND_PORT } from './in-port/option-findone.ip';
import { SEARCH_OPTION_INBOUND_PORT } from './in-port/option-search.ip';
import { UPDATE_OPTION_INBOUND_PORT } from './in-port/option-update.ip';
import { OptionController } from './option.ctrl';
import { Option } from './option.entity';
import { CreateOptionRepository } from './out-adapter/option-create.repo';
import { DeleteOptionRepository } from './out-adapter/option-delete.repo';
import { FindAllOptionRepository } from './out-adapter/option-findall.repo';
import { FindOneOptionRepository } from './out-adapter/option-findone.repo';
import { SearchOptionRepository } from './out-adapter/option-search.repo';
import { UpdateOptionRepository } from './out-adapter/option-update.repo';
import { CREATE_OPTION_OUTBOUND_PORT } from './out-port/option-create.op';
import { DELETE_OPTION_OUTBOUND_PORT } from './out-port/option-delete.op';
import { FINDALL_OPTION_OUTBOUND_PORT } from './out-port/option-findall.op';
import { FINDONE_OPTION_OUTBOUND_PORT } from './out-port/option-findone.op';
import { SEARCH_OPTION_OUTBOUND_PORT } from './out-port/option-search.op';
import { UPDATE_OPTION_OUTBOUND_PORT } from './out-port/option-update.op';
import { OptionCreateService } from './service/option-create.service';
import { OptionDeleteService } from './service/option-delete.service';
import { OptionFindAllService } from './service/option-findall.service';
import { OptionFindOneService } from './service/option-findone.service';
import { OptionSearchService } from './service/option-search.service';
import { OptionUpdateService } from './service/option-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  controllers: [OptionController],
  providers: [
    {
      provide: FINDALL_OPTION_INBOUND_PORT,
      useClass: OptionFindAllService,
    },
    {
      provide: FINDALL_OPTION_OUTBOUND_PORT,
      useClass: FindAllOptionRepository,
    },
    {
      provide: FINDONE_OPTION_INBOUND_PORT,
      useClass: OptionFindOneService,
    },
    {
      provide: FINDONE_OPTION_OUTBOUND_PORT,
      useClass: FindOneOptionRepository,
    },
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
    {
      provide: SEARCH_OPTION_INBOUND_PORT,
      useClass: OptionSearchService,
    },
    {
      provide: SEARCH_OPTION_OUTBOUND_PORT,
      useClass: SearchOptionRepository,
    },
  ],
})
export class OptionModule {}
