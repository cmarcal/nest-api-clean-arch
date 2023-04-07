import { Injectable } from '@nestjs/common';
import { SectionsFactoryService } from './sections-factory.service';
import { RecommendationsAdapter } from 'src/module/apiAdapter/recommendations';

@Injectable()
export class SectionsUserCase {
  constructor(
    private readonly sectionFactoryService: SectionsFactoryService,
    private readonly recommendationsAdapter: RecommendationsAdapter,
  ) {}

  async getSections() {
    try {
      const recommendations =
        await this.recommendationsAdapter.getSectionsRecommendations(3);

      const mountSections = { sections: recommendations };
      return this.sectionFactoryService.updateSections(mountSections);
    } catch (err) {
      throw new Error(err);
    }
  }
}
