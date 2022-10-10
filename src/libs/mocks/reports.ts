import Report from '../interfaces/report';

export const getReportsMock = (): Report[] => {
  const data = [];

  data.push({
    id: 1,
    attributes: {
      img: {
        data: { id: 1, attributes: { name: 'geh', url: 'https://img.icons8.com/ios-filled/50/000000/twitter.png' } },
      },
      title:
        'titasdasdasdasdasdasdasdaasdasdasdasdasdasdasdsdasdSleほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ',
      body: 'body',
      date: '2021/01/01',
      category: {
        data: {
          id: 1,
          attributes: {
            name: 'カテゴリー1',
            createdAt: '2021-01-01T00:00:00.000Z',
            updatedAt: '2021-01-01T00:00:00.000Z',
            publishedAt: '2021-01-01T00:00:00.000Z',
          },
        },
      },
      tags: {
        data: [
          {
            id: 1,
            attributes: {
              name: 'タグ1',
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
          {
            id: 2,
            attributes: {
              name: 'タグ2',
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
        ],
      },
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      publishedAt: '2021-01-01T00:00:00.000Z',
    },
  });

  for (let i = 2; i < 20; i++) {
    data.push({
      id: i,
      attributes: {
        img: { data: { id: 1, attributes: { name: '', url: 'https://source.unsplash.com/random/100x100' } } },
        title: `title${i}`,
        body: 'body',
        date: '2020-01-01',
        category: {
          data: {
            id: i,
            attributes: {
              name: `category${i}`,
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
        },
        tags: {
          data: [
            {
              id: i,
              attributes: {
                name: `tag${i}`,
                createdAt: '2021-01-01T00:00:00.000Z',
                updatedAt: '2021-01-01T00:00:00.000Z',
                publishedAt: '2021-01-01T00:00:00.000Z',
              },
            },
          ],
        },
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
        publishedAt: '2021-01-01T00:00:00.000Z',
      },
    });
  }

  return data;
};
