import Category from '../interfaces/category';

export const getCategoriesMock = (): Category[] => {
  const data = [];

  for (let i = 1; i < 10; i++) {
    data.push({
      id: i,
      name: `category${i}`,
    });
  }

  return data;
};
