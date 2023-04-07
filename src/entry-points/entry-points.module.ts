import { Module } from '@nestjs/common';
import { RecommendationsApi } from './api/recommendations-api';
import { GatewayModule } from 'src/gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  exports: [RecommendationsApi],
  providers: [RecommendationsApi],
})
export class EntryPointsModule {}
