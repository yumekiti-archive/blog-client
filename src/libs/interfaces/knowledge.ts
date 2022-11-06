import Category from './category';
import Tag from './tag';

export default interface Knowledge {
  data: {
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
      tags: { data: Tag[] };
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
