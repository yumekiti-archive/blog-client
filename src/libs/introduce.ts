import client from "./client"
import { Introduce } from "../interfaces/introduce"

// 取得
export const get = (): Promise<Introduce> => {
  return client.get("/")
}

// モック
export const getIntroduceMock = (): Introduce => {
  return {
    introduce: {
      name: 'ゆめきち',
      body: '専門学校生です。\n主にインフラを勉強しています。',
      links: [
        { name: 'Twitter', path: 'https://twitter.com/yumekiti1204', img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png' },
        { name: 'GitHub', path: 'https://github.com/yumekiti', img: 'https://img.icons8.com/ios-filled/50/000000/github.png' }
      ],
    }
  };
}