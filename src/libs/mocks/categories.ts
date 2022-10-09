import Category from '../interfaces/category';

export const getCategoriesMock = (): Category[] => {
  const data = [];

  for (let i = 1; i < 10; i++) {
    data.push({
      id: i,
      attributes: {
        name: `Category ${i}`,
        createdAt: '2021-01-01T00:00:00.000Z',
        updatedAt: '2021-01-01T00:00:00.000Z',
        publishedAt: '2021-01-01T00:00:00.000Z',
      },
    });
  }

  return data;
};
