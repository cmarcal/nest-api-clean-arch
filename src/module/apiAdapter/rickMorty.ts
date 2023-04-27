import { Injectable } from '@nestjs/common';
import { Character } from 'src/core';
import { RickMortyApi } from 'src/entry-points/api/rickMorty/rick-morty-api';

@Injectable()
export class RickMortyAdapter {
  constructor(private readonly rickMortyApi: RickMortyApi) {}

  async getCharacters(page?: number): Promise<Character[]> {
    try {
      const characters = await this.rickMortyApi.getCharacters(page);
      return characters;
    } catch (err) {
      throw new Error(err);
    }
  }
}
