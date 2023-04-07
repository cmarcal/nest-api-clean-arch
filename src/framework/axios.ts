import { Injectable } from '@nestjs/common';
import { AxiosResponse, Axios, AxiosRequestConfig } from 'axios';

@Injectable()
export class AxiosFramework {
  constructor(private readonly axiosService: Axios) {}

  async get(url: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
    return await this.axiosService.get(url, params);
  }
  async post(
    url: string,
    params: AxiosRequestConfig,
    body?: unknown,
  ): Promise<AxiosResponse> {
    return await this.axiosService.post(url, body, params);
  }
  async put(
    url: string,
    params: AxiosRequestConfig,
    body?: unknown,
  ): Promise<AxiosResponse> {
    return await this.axiosService.post(url, body, params);
  }
  async delete(
    url: string,
    params: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return await this.axiosService.get(url, params);
  }
}
