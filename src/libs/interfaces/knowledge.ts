import Category from "./category";
import Tag from "./tag";

export default interface Knowledge {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  date: string;
  path: string;
  category: Category;
  tags: Tag[];
}