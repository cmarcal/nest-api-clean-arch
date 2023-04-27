import { Injectable } from '@nestjs/common';
import { CharactersRickMorty } from './characters/characters';

@Injectable()
export class RickMortyApi {
  constructor(private readonly characters: CharactersRickMorty) {}

  async getCharacters(page?: number) {
    const urlBase = 'https://rickandmortyapi.com/api';
    return await this.characters.getCharacters(urlBase, page);
  }
}
