import { Character } from '../entities';

export class CharactersDto {
  characters: Array<Character>;
}

export class UpdateCharactersDto extends CharactersDto {}
