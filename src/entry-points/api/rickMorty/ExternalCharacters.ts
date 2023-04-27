import { Character } from 'src/core';

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ExternalCharacters {
  info: Info;
  results: Array<Character>;
}
