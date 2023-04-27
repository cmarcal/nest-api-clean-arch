import { Injectable } from '@nestjs/common';
import {
  CharactersDto,
  UpdateCharactersDto,
} from 'src/core/dtos/charactersRickMorty.dto';

@Injectable()
export class RickMortyFactoryService {
  updateSections(updateCharactersDto: UpdateCharactersDto) {
    const newCharacters = new CharactersDto();
    newCharacters.characters = updateCharactersDto.characters;

    return newCharacters;
  }
}
