import client from "./client"
import { Knowledge } from "../interfaces/knowledge"

// 取得
export const get = (): Promise<Knowledge> => {
  return client.get("/")
}

// モック
export const getKnowledgeMock = (): Knowledge => {
  return {
    knowledge: [
      {id: 1, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'titasdasdasdasdasdasdasdasdasdSle', subtitle: 'subtitle', date: '2021/01/01'},
      {id: 2, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
      {id: 3, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
      {id: 4, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
      {id: 5, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
      {id: 6, img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png', title: 'title', subtitle: 'subtitle', date: '2021/01/01'},
    ]
  }
}