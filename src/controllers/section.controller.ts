import { Controller, Get } from '@nestjs/common';
import { SectionsUserCase } from 'src/use-cases/sections/sections.use-case';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsUseCase: SectionsUserCase) {}

  @Get()
  async getSections() {
    return this.sectionsUseCase.getSections();
  }
}
