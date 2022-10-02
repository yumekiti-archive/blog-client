import Category from "./category";
import Tag from "./tag";

export default interface Report {
  id: number;
  img: string;
  title: string;
  date: string;
  category: Category;
  tags: Tag[];
}