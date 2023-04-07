import { Module } from '@nestjs/common';
import { SectionsController } from './controllers';
import { SectionsUseCaseModule } from './use-cases/sections/sections-use-case.module';

@Module({
  imports: [SectionsUseCaseModule],
  providers: [SectionsUseCaseModule],
  controllers: [SectionsController],
})
export class AppModule {}
