import { Sections } from '../entities/section.entity';

export class SectionsDto {
  sections: Array<Sections>;
}

export class UpdateSectionsDto extends SectionsDto {}
