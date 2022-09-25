export const getHeaderMock = () => {
  return {
    header: {
      title: 'ブログっぽいなにか',
      links: [
        { name: '記事', path: '/reports' },
        { name: '知見', path: '/knowledge' },
      ]
    }
  };
}