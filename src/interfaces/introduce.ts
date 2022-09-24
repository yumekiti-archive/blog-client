export interface Introduce {
  introduce: {
    name: string;
    body: string;
    links: { name: string; path: string; img: string }[];
  };
}