import { Injectable } from '@nestjs/common';
import { Sections } from 'src/core/entities/section.entity';
import { RecommendationsApi } from 'src/entry-points/api/recommendations-api';

@Injectable()
export class RecommendationsAdapter {
  constructor(private readonly recommendationsApi: RecommendationsApi) {}

  async getSectionsRecommendations(
    quantitySections: number,
  ): Promise<Sections[]> {
    try {
      const recommendations =
        this.recommendationsApi.getSections(quantitySections);

      return recommendations;
    } catch (err) {
      throw new Error(err);
    }
  }
}
