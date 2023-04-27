import { Module } from '@nestjs/common';
import { RecommendationsApi } from './api/recommendations-api';
import { GatewayModule } from 'src/gateway/gateway.module';
import { RickMortyApi } from './api/rickMorty';
import { CharactersRickMorty } from './api/rickMorty/characters/characters';

@Module({
  imports: [GatewayModule],
  exports: [RecommendationsApi, RickMortyApi],
  providers: [RecommendationsApi, RickMortyApi, CharactersRickMorty],
})
export class EntryPointsModule {}
