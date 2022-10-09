import Category from './category';
import Tag from './tag';

export default interface Knowledge {
  id: number;
  attributes: {
    img: string;
    title: string;
    content: string;
    path: string;
    category: Category;
    tags: Tag[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
