import useSWR from 'swr';

import Category from './interfaces/category';
import Knowledge from './interfaces/knowledge';
import Report from './interfaces/report';
import Tag from './interfaces/tag';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// get
const useGet = (url: string, page: number, pageSize: number) => {
  const { data, error } = useSWR(`${window.location.origin}/api/${url}?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

// categories
export const useGetCategories = (page:number, pageSize:number): Category[] => {
  const { data, isLoading, isError } = useGet('categories', page, pageSize);
  if (isLoading || isError) return [];
  return data.data;
};

// knowledges
export const useGetKnowledges = (page:number, pageSize:number): Knowledge[] => {
  const { data, isLoading, isError } = useGet('knowledges', page, pageSize);
  if (isLoading || isError) return [];
  return data.data;
};

// reports
export const useGetReports = (page:number, pageSize:number): Report[] => {
  const { data, isLoading, isError } = useGet('reports', page, pageSize);
  if (isLoading || isError) return [];
  return data.data;
};

// tags
export const useGetTags = (page:number, pageSize:number): Tag[] => {
  const { data, isLoading, isError } = useGet('tags', page, pageSize);
  if (isLoading || isError) return [];
  return data.data;
};
