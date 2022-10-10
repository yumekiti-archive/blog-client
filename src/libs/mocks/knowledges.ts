import Knowledge from '../interfaces/knowledge';

export const getKnowledgeMock = (): Knowledge[] => {
  const data = [];

  data.push({
    id: 1,
    attributes: {
      img: {
        data: {
          id: 1,
          attributes: {
            name: 'img1',
            url: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
          },
        },
      },
      title: 'titasdasdasdasdasdasdasdasdasdSle',
      content: 'subtitle',
      date: '2021/01/01',
      path: 'https://twitter.com/yumekiti1204',
      category: {
        data: {
          id: 1,
          attributes: {
            name: 'Category 1',
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
              name: 'tag1',
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
          {
            id: 2,
            attributes: {
              name: 'tag2',
              createdAt: '2021-01-01T00:00:00.000Z',
              updatedAt: '2021-01-01T00:00:00.000Z',
              publishedAt: '2021-01-01T00:00:00.000Z',
            },
          },
          {
            id: 3,
            attributes: {
              name: 'tag3',
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

  for (let i = 2; i < 100; i++) {
    data.push({
      id: i,
      attributes: {
        img: {
          data: {
            id: 1,
            attributes: {
              name: 'img1',
              url: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
            },
          },
        },
        title: `title${i}`,
        content: `subtitle${i}`,
        date: '2020-01-01',
        path: 'https://twitter.com/yumekiti1204',
        category: {
          data: {
            id: 1,
            attributes: {
              name: 'category',
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
                name: 'tag1',
                createdAt: '2021-01-01T00:00:00.000Z',
                updatedAt: '2021-01-01T00:00:00.000Z',
                publishedAt: '2021-01-01T00:00:00.000Z',
              },
            },
            {
              id: 2,
              attributes: {
                name: 'tag2',
                createdAt: '2021-01-01T00:00:00.000Z',
                updatedAt: '2021-01-01T00:00:00.000Z',
                publishedAt: '2021-01-01T00:00:00.000Z',
              },
            },
            {
              id: 3,
              attributes: {
                name: 'tag3',
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
