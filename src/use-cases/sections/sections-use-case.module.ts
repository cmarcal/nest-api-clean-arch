import { Module } from '@nestjs/common';
import { SectionsUserCase } from './sections.use-case';
import { SectionsFactoryService } from './sections-factory.service';
import { ApiAdapterModule } from '../../module/apiAdapter/apiAdapter.module';

@Module({
  imports: [ApiAdapterModule],
  providers: [SectionsUserCase, SectionsFactoryService, ApiAdapterModule],
  exports: [SectionsFactoryService, SectionsUserCase],
})
export class SectionsUseCaseModule {}
