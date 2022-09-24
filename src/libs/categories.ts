import client from "./client"
import { Categories } from "../interfaces/categories"

// 取得
export const getCategories = (): Promise<Categories> => {
  return client.get("/")
}

// モック
export const getCategoriesMock = (): Categories => {
  return {
    categories: [
      { id: 1, name: 'ここにカテゴリーが入ります。(999)' },
      { id: 2, name: 'ここにカテゴリーが入ります。(999)' },
      { id: 3, name: 'ここにカテゴリーが入ります。(999)' },
    ],
  }
}

// // 作成
// export const createCategories = (data: Categories) => {
//   return client.post("/", data)
// }

// // 削除
// export const removeCategories = (id: Categories) => {
//   return client.delete(`/${id}`)
// }