import { Module } from '@nestjs/common';
import { AxiosFramework } from './axios';
import { Axios } from 'axios';

@Module({
  imports: [Axios],
  exports: [Axios, AxiosFramework],
  providers: [Axios, AxiosFramework],
})
export class FrameworkModule {}
