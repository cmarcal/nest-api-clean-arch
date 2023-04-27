import { Injectable } from '@nestjs/common';
import { Sections } from 'src/core/entities/section.entity';
import { HttpGateway } from 'src/gateway/httpGateway/httpGateway';

@Injectable()
export class RecommendationsApi {
  private readonly urlBase = process.env.API_PD_RECOMMENDATION;
  constructor(private readonly httpGateway: HttpGateway) {}

  async getSections(quantitySections: number): Promise<Sections[]> {
    try {
      const param = new URLSearchParams(quantitySections.toString());
      const response = (await this.httpGateway.get(
        `${this.urlBase}/sections`,
        param,
      )) as unknown as Sections[];

      return response;
    } catch (err) {
      throw new Error(err);
    }
  }
}
