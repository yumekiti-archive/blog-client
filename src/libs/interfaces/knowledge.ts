import { Category } from './category';
import { TagRelation } from './tag';

export default interface Knowledge {
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
    content: string;
    path: string;
    category: { data: Category };
    tags: TagRelation;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
