import client from "./client"
import { Tags } from "../interfaces/tags"

// 取得
export const get = (): Promise<Tags> => {
  return client.get("/")
}

// モック
export const getTagsMock = (): Tags => {
  return {
    tags: [
      { id: 1, name: 'ここにタグが入ります。(999)' },
      { id: 2, name: 'ここにタグが入ります。(999)' },
      { id: 3, name: 'ここにタグが入ります。(999)' },
    ],
  }
}