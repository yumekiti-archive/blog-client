import Knowledge from '../interfaces/knowledge';

export const getKnowledgeMock = (): Knowledge[] => {
  const data = [];

  data.push({
    id: 1,
    img: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
    title: 'titasdasdasdasdasdasdasdasdasdSle',
    content: 'subtitle',
    date: '2021/01/01', 
    path: 'https://twitter.com/yumekiti1204',
    category: { id: 1, name: 'category'},
    tags: [{id: 1, name: 'tag1'}, {id: 2, name: 'tag2'}, {id: 3, name: 'tag2'}, {id: 4, name: 'tag2'}, {id: 5, name: 'tag2'}, {id: 6, name: 'tag2'}, {id: 7, name: 'tag2'}]
  });

  for (let i = 2; i < 100; i++) {
    data.push({
      id: i,
      img: 'https://pbs.twimg.com/profile_images/1492151996857860097/MRnAqw5h_400x400.png',
      title: `title${i}`,
      content: `subtitle${i}`,
      date: '2020-01-01',
      path: 'https://twitter.com/yumekiti1204',
      category: { id: 1, name: 'category'},
      tags: [{ id: 1, name: 'tag1' }, { id: 2, name: 'tag2' }],
    });
  }

  return data;
}