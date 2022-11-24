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
const useGet = (pluralApiId: string, page: number, pageSize: number, type: number, value: string) => {
  const filters = value ? `filters${filter[type]}=${value}&` : '';
  return useSWR(
    `https://blog.yumekiti.net/api/${pluralApiId}?sort=id%3Adesc&${filters}pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`,
    fetcher,
  );
  // return useSWR(`${window.location.origin}/api/${pluralApiId}?sort=id%3Adesc?${filters}pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`, fetcher);
};

// categories
export const useGetCategories = (page: number, pageSize: number, type: number, value: string): Category => {
  const { data, error } = useGet('categories', page, pageSize, type, value);
  if (error || !data) return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  return data;
};

// knowledges
export const useGetKnowledges = (page: number, pageSize: number, type: number, value: string): Knowledge => {
  const { data, error } = useGet('knowledges', page, pageSize, type, value);
  if (error || !data) return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  return data;
};

// reports
export const useGetReports = (page: number, pageSize: number, type: number, value: string): Report => {
  const { data, error } = useGet('reports', page, pageSize, type, value);
  if (error || !data) return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  return data;
};

// tags
export const useGetTags = (page: number, pageSize: number, type: number, value: string): Tag => {
  const { data, error } = useGet('tags', page, pageSize, type, value);
  if (error || !data) return { data: [], meta: { pagination: { page: 0, pageSize: 0, pageCount: 0, total: 0 } } };
  return data;
};

// report
export const useGetReport = (id: number): ReportDetail => {
  const { data } = useSWR(`https://blog.yumekiti.net/api/reports/${id}?populate=*`, fetcher);
  if (!data)
    return {
      data: {
        id: 0,
        attributes: {
          img: { data: { id: 0, attributes: { name: '', url: '' } } },
          title: '',
          body: '',
          category: { data: { id: 0, attributes: { name: '', createdAt: '', updatedAt: '', publishedAt: '' } } },
          tags: { data: [] },
          createdAt: '',
          updatedAt: '',
          publishedAt: '',
        },
      },
    };
  return data;
};
