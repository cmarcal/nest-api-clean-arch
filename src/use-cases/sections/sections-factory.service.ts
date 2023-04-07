import { Injectable } from '@nestjs/common';
import { SectionsDto, UpdateSectionsDto } from 'src/core/dtos/sections.dto';

@Injectable()
export class SectionsFactoryService {
  updateSections(updateSectionsDto: UpdateSectionsDto) {
    const newSections = new SectionsDto();
    newSections.sections = updateSectionsDto.sections;

    return newSections;
  }
}
