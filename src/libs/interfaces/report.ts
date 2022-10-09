import Category from './category';
import Tag from './tag';

export default interface Report {
  id: number;
  attributes: {
    img: string;
    title: string;
    body: string;
    category: Category;
    tags: Tag[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
