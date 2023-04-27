import { Injectable } from '@nestjs/common';

const _buildUrl = (params: URLSearchParams, url: string): string => {
  if (!params) return url;

  const param = new URLSearchParams(params);
  return `${url}/?${param}`;
};

@Injectable()
export class FetchFramework {
  async get(url: string, params: URLSearchParams): Promise<Response> {
    try {
      const response = await fetch(_buildUrl(params, url), { method: 'GET' });
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }
  async post(
    url: string,
    params: URLSearchParams,
    body?: BodyInit,
  ): Promise<Response> {
    try {
      const response = await fetch(_buildUrl(params, url), {
        method: 'POST',
        body,
      });
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }
  async put(
    url: string,
    params: URLSearchParams,
    body?: BodyInit,
  ): Promise<Response> {
    try {
      const response = await fetch(_buildUrl(params, url), {
        method: 'PUT',
        body,
      });
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }
  async delete(url: string, params: URLSearchParams): Promise<Response> {
    try {
      const response = await fetch(_buildUrl(params, url), {
        method: 'DELETE',
      });
      return response.json();
    } catch (err) {
      throw new Error(err);
    }
  }
}
