import { Category } from './category';
import { TagRelation } from './tag';

export interface Report {
  id: number;
  attributes: {
    img: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    title: string;
    body: string;
    category: { data: Category };
    tags: TagRelation;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
