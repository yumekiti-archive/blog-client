import Tag from '../interfaces/tag';

export const getTagsMock = (): Tag[] => {
  const data = [];

  for (let i = 1; i < 30; i++) {
    data.push({
      id: i,
      attributes: {
        name: `tag${i}`,
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
        publishedAt: '2021-01-01T00:00:00.000Z',
      }
    });
  }

  return data;
};
