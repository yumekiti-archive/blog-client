import Introduce from '../interfaces/introduce';

export const getIntroduceMock = (): Introduce => {
  return {
    name: 'ゆめきち',
    body: '専門学校生です。\n主にインフラを勉強しています。',
    links: [
      {
        name: 'Portfolio',
        path: 'https://portfolio.yumekiti.net/',
        icon: 'las la-user',
      },
      {
        name: 'Twitter',
        path: 'https://twitter.com/yumekiti1204',
        icon: 'lab la-twitter',
      },
      {
        name: 'GitHub',
        path: 'https://github.com/yumekiti',
        icon: 'lab la-github',
      },
    ],
  };
};
