import Introduce from '../interfaces/introduce';

export const getIntroduceMock = (): Introduce => {
  return {
    name: 'ゆめきち',
    body: '専門学校生です。\n主にインフラを勉強しています。',
    links: [
      {
        name: 'Portfolio',
        path: 'https://portfolio.yumekiti.net/',
        icon: 'user',
      },
      {
        name: 'Twitter',
        path: 'https://twitter.com/yumekiti1204',
        icon: 'twitter',
      },
      {
        name: 'GitHub',
        path: 'https://github.com/yumekiti',
        icon: 'github',
      },
    ],
  };
};
