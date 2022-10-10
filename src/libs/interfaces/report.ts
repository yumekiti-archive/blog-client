import Category from './category';
import Tag from './tag';

export default interface Report {
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
    tags: { data: Tag[] };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
