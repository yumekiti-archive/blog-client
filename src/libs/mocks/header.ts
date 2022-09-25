export const getHeaderMock = () => {
  return {
    header: {
      title: 'ブログっぽいなにか',
      links: [
        { name: 'カテゴリー', path: '/categories' },
        { name: '記事', path: '/reports' },
        { name: '知見', path: '/knowledge' },
      ]
    }
  };
}