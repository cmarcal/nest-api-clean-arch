import { Injectable } from '@nestjs/common';
import { RickMortyAdapter } from 'src/module/apiAdapter/rickMorty';
import { RickMortyFactoryService } from './rick-morty-factory.service';

@Injectable()
export class RickMortyUseCase {
  constructor(
    private readonly rickMortyFactoryService: RickMortyFactoryService,
    private readonly rickMortyAdapter: RickMortyAdapter,
  ) {}

  async getCharacters(page?: number) {
    try {
      const characters = await this.rickMortyAdapter.getCharacters(page);
      return this.rickMortyFactoryService.updateSections({ characters });
    } catch (err) {
      throw new Error(err);
    }
  }
}
