export const getTagsMock = () => {
  const data = [];

  for (let i = 1; i < 30; i++) {
    data.push({
      id: i,
      name: `tag${i}`,
    });
  }

  return data;
}