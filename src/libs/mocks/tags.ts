import Tag from '../interfaces/tag';

export const getTagsMock = (): Tag[] => {
  const data = [];

  for (let i = 1; i < 30; i++) {
    data.push({
      id: i,
      name: `tag${i}`,
    });
  }

  return data;
};
