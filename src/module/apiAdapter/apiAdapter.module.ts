import { Module } from '@nestjs/common';
import { RecommendationsAdapter } from './recommendations';
import { EntryPointsModule } from 'src/entry-points/entry-points.module';
import { RickMortyAdapter } from './rickMorty';

@Module({
  imports: [EntryPointsModule],
  exports: [RecommendationsAdapter, RickMortyAdapter],
  providers: [RecommendationsAdapter, RickMortyAdapter],
})
export class ApiAdapterModule {}
