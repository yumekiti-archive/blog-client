export const getReportsMock = () => {
  const data = [];

  data.push({
    id: 1,
    img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
    title: 'titasdasdasdasdasdasdasdaasdasdasdasdasdasdasdsdasdSleほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ',
    category: 'category',
    date: '2021/01/01',
  });
  
  for (let i = 2; i < 20; i++) {
    data.push({
      id: i,
      img: 'https://source.unsplash.com/random/100x100',
      title: `title${i}`,
      category: `category${i}`,
      date: '2020-01-01',
    });
  }
  
  return data;
}