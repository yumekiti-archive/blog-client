import Header from "../interfaces/header";

export const getHeaderMock = (): Header => {
  return {
    title: 'ブログっぽいなにか',
    links: [
      { name: '記事', path: 'reports' },
      { name: '知見', path: 'knowledge' },
    ]
  };
}