import useSWR from 'swr';

import Category from './interfaces/category';
import Knowledge from './interfaces/knowledge';
import Report from './interfaces/report';
import Tag from './interfaces/tag';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// get
const useGet = (url: string) => {
  const { data, error } = useSWR(`http://192.168.11.58:1337/api/${url}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

// categories
export const useGetCategories = (): Category[] => {
  const { data, isLoading, isError } = useGet('categories');
  if (isLoading || isError) return [];
  return data.data;
};

// knowledges
export const useGetKnowledge = (): Knowledge[] => {
  const { data, isLoading, isError } = useGet('knowledges');
  if (isLoading || isError) return [];
  return data.data;
}

// // reports
// export const useGetReports = () => {
//   const { data, isLoading, isError } = useGet('reports');
//   if (isLoading || isError) return null;
//   return data.data;
// }

// tags
export const useGetTags = (): Tag[] => {
  const { data, isLoading, isError } = useGet('tags');
  if (isLoading || isError) return [];
  return data.data;
}
