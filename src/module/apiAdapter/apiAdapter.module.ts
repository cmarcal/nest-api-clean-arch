import { Module } from '@nestjs/common';
import { RecommendationsAdapter } from './recommendations';
import { EntryPointsModule } from 'src/entry-points/entry-points.module';

@Module({
  imports: [EntryPointsModule],
  exports: [RecommendationsAdapter],
  providers: [RecommendationsAdapter],
})
export class ApiAdapterModule {}
