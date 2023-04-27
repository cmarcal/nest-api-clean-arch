import { Controller, Get, Query } from '@nestjs/common';

import { RickMortyUseCase } from 'src/use-cases/rickMorty/rick-morty.use-case';

@Controller('rickmorty')
export class RickMortyController {
  constructor(private readonly rickMortyuseCase: RickMortyUseCase) {}

  @Get('characters')
  async getCharacters(@Query() { page }: { page: number }) {
    return this.rickMortyuseCase.getCharacters(page);
  }
}
