import { Module } from '@nestjs/common';
import { RickMortyUseCase } from './rick-morty.use-case';
import { RickMortyFactoryService } from './rick-morty-factory.service';
import { ApiAdapterModule } from '../../module/apiAdapter/apiAdapter.module';

@Module({
  imports: [ApiAdapterModule],
  providers: [RickMortyUseCase, RickMortyFactoryService, ApiAdapterModule],
  exports: [RickMortyFactoryService, RickMortyUseCase],
})
export class RickMortysUseCaseModule {}
