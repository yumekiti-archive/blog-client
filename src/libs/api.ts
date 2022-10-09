import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// get
export const get = (url: string) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

// categories
export const getCategories = () => {
  return get('/api/categories');
}

// introduce
export const getIntroduce = () => {
  return get('/api/introduce');
}

// knowledge
export const getKnowledge = () => {
  return get('/api/knowledge');
}

// reports
export const getReports = () => {
  return get('/api/reports');
}

// tags
export const getTags = () => {
  return get('/api/tags');
}
