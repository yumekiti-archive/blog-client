import useSWR from 'swr';

import Category from './interfaces/category';

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
}

// // introduce
// export const getIntroduce = () => {
//   return useGet('/api/introduce');
// }

// // knowledge
// export const getKnowledge = () => {
//   return useGet('/api/knowledge');
// }

// // reports
// export const getReports = () => {
//   return useGet('/api/reports');
// }

// // tags
// export const getTags = () => {
//   return useGet('/api/tags');
// }
