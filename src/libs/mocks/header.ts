import { Header } from "../../interfaces/header"

export const getHeaderMock = (): Header => {
  return {
    header: {
      title: 'ブログっぽいなにか',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]
    }
  };
}