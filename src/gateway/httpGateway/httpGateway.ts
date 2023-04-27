import { Injectable } from '@nestjs/common';
import { FetchFramework } from 'src/framework/fetch';
import {
  FetchFrameworkIResponse,
  FetchFrameworkIParams,
} from 'src/framework/IFrameworkAxios';

@Injectable()
export class HttpGateway {
  constructor(private readonly fetchFramework: FetchFramework) {}
  async get(
    url: string,
    params?: FetchFrameworkIParams,
  ): Promise<FetchFrameworkIResponse> {
    return await this.fetchFramework.get(url, params);
  }
  async post(
    url: string,
    params: FetchFrameworkIParams,
    body?: BodyInit,
  ): Promise<FetchFrameworkIResponse> {
    return await this.fetchFramework.post(url, params, body);
  }
  async put(
    url: string,
    params: FetchFrameworkIParams,
    body?: BodyInit,
  ): Promise<FetchFrameworkIResponse> {
    return await this.fetchFramework.post(url, params, body);
  }
  async delete(
    url: string,
    params: FetchFrameworkIParams,
  ): Promise<FetchFrameworkIResponse> {
    return await this.fetchFramework.delete(url, params);
  }
}
