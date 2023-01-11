import useSWR from 'swr';

import { Category } from './interfaces/category';
import Knowledge from './interfaces/knowledge';
import { Report, ReportDetail } from './interfaces/report';
import { Tag } from './interfaces/tag';

const filter = [
  '', // none filter
  '[category][id][$in]', // category id in
  '[tags][id][$in]', // tag id in
  '[title][$containsi]', // title contains
  '',
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// get
export const useGet = (pluralApiId: string, page: number, pageSize: number, type: number, value: string) => {
  const filters = value ? `filters${filter[type]}=${value}&` : '';
  return useSWR(
    `https://blog.yumekiti.net/api/${pluralApiId}?sort=id%3Adesc&${filters}pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
    fetcher,
  );
  // return useSWR(`${window.location.origin}/api/${pluralApiId}?sort=id%3Adesc?${filters}pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`, fetcher);
};

// report
export const useGetReport = (id: number) => {
  return useSWR(`https://blog.yumekiti.net/api/reports/${id}?populate=*`, fetcher);
};
