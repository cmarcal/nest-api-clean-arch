import { Injectable } from '@nestjs/common';
import { HttpGateway } from 'src/gateway/httpGateway/httpGateway';
import { Character } from 'src/core';
import { URLSearchParams } from 'url';
import { ExternalCharacters } from '../ExternalCharacters';

@Injectable()
export class CharactersRickMorty {
  constructor(private readonly httpGateway: HttpGateway) {}

  async getCharacters(urlBase: string, page?: number): Promise<Character[]> {
    try {
      const params = new URLSearchParams(page.toString());
      const { results } = (await this.httpGateway.get(
        `${urlBase}/character`,
        params,
      )) as unknown as ExternalCharacters;
      return results;
    } catch (err) {
      throw new Error(err);
    }
  }
}
