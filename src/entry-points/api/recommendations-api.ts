import { Injectable } from '@nestjs/common';
import { Sections } from 'src/core/entities/section.entity';
import { HttpGateway } from 'src/gateway/httpGateway/httpGateway';

@Injectable()
export class RecommendationsApi {
  protected readonly urlBase = process.env.API_PD_RECOMMENDATION;
  constructor(private readonly httpGateway: HttpGateway) {}

  async getSections(quantitySections: number): Promise<Sections[]> {
    try {
      const response = await this.httpGateway.get(`${this.urlBase}/sections`, {
        quantitySections,
      });

      return response.data;
    } catch (err) {
      new Error(err);
    }
  }
}
