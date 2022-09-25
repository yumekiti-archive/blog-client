import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

// get
export const get = (url: string) => {
  const { data, error } = useSWR(url, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}