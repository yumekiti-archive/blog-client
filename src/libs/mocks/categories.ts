import { Categories } from "../../interfaces/categories"

export const getCategoriesMock = (): Categories => {
  return {
    categories: [
      { id: 1, name: 'ここにカテゴリーが入ります。(999)' },
      { id: 2, name: 'ここにカテゴリーが入ります。(999)' },
      { id: 3, name: 'ここにカテゴリーが入ります。(999)' },
    ],
  }
}
