import { Injectable } from '@nestjs/common';
import { AxiosFramework } from 'src/framework/axios';
import {
  AxiosFrameworkIRequest,
  AxiosFrameworkIResponse,
} from 'src/framework/IFrameworkAxios';

@Injectable()
export class HttpGateway extends AxiosFramework {
  async get(url: string, params: unknown): Promise<AxiosFrameworkIResponse> {
    return await this.get(url, params);
  }
  async post(
    url: string,
    params: AxiosFrameworkIRequest,
    body?: unknown,
  ): Promise<AxiosFrameworkIResponse> {
    return await this.post(url, body, params);
  }
  async put(
    url: string,
    params: AxiosFrameworkIRequest,
    body?: unknown,
  ): Promise<AxiosFrameworkIResponse> {
    return await this.post(url, body, params);
  }
  async delete(url: string, params: unknown): Promise<AxiosFrameworkIResponse> {
    return await this.get(url, params);
  }
}
