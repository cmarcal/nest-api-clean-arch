import { Module } from '@nestjs/common';
import { FetchFramework } from './fetch';

@Module({
  exports: [FetchFramework],
  providers: [FetchFramework],
})
export class FrameworkModule {}
