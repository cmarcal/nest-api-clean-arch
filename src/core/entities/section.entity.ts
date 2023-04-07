import { Material } from './materials.entity';

export class Sections {
  Name: string;
  Data: {
    Materials: Array<Material>;
  };
  type: number;
}
