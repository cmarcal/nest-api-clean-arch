import { Sections } from '../entities';

export class SectionsDto {
  sections: Array<Sections>;
}

export class UpdateSectionsDto extends SectionsDto {}
