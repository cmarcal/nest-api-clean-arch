import { Module } from '@nestjs/common';
import { SectionsController } from './controllers';
import { SectionsUseCaseModule } from './use-cases/sections/sections-use-case.module';
import { RickMortyController } from './controllers/rickmorty.controller';
import { RickMortysUseCaseModule } from './use-cases/rickMorty/rick-morty-use-case.module';

@Module({
  imports: [SectionsUseCaseModule, RickMortysUseCaseModule],
  providers: [SectionsUseCaseModule, RickMortysUseCaseModule],
  controllers: [SectionsController, RickMortyController],
})
export class AppModule {}
