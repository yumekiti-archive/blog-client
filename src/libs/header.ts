import client from "./client"
import { Header } from "../interfaces/header"

// 取得
export const get = (): Promise<Header> => {
  return client.get("/")
}

// モック
export const getHeaderMock = (): Header => {
  return {
    header: {
      title: 'ゆめきちのブログっぽいなにか',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]
    }
  };
}