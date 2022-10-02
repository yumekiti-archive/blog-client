import Report from '../interfaces/report';

export const getReportsMock = (): Report[] => {
  const data = [];

  data.push({
    id: 1,
    img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
    title: 'titasdasdasdasdasdasdasdaasdasdasdasdasdasdasdsdasdSleほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげほげ',
    body: 'body',
    date: '2021/01/01',
    category: {
      id: 1,
      name: 'カテゴリー1',
    },
    tags: [
      {
        id: 1,
        name: 'タグ1',
      },
      {
        id: 2,
        name: 'タグ2',
      },
    ],
  });
  
  for (let i = 2; i < 20; i++) {
    data.push({
      id: i,
      img: 'https://source.unsplash.com/random/100x100',
      title: `title${i}`,
      body: 'body',
      date: '2020-01-01',
      category: {
        id: i,
        name: `category${i}`,
      },
      tags: [
        {
          id: i,
          name: `tag${i}`,
        },
      ],
    });
  }
  
  return data;
}