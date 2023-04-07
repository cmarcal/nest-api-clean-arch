import {
  Area,
  MainSubject,
  School,
  SpecificDetails,
  Tag,
  University,
  User,
} from './';

export class Material {
  Id: number;
  NormalizedName: string;
  materialTypeId: number;
  SpecificDetails: SpecificDetails;
  thumbnailUrl: string;
  Tags: Array<Tag>;
  School: School;
  University: University;
  Area: Area;
  MainSubject: MainSubject;
  User: User;
  PositiveEvaluationCount: number;
  NegativeEvaluationCount: number;
}
