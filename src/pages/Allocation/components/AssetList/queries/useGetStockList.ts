import { useQuery } from 'react-query';
import axios from 'axios';
import { IStock } from 'types/allocation';

export const fetchStockList = async (searchValue?: string) => {
  const queryString = searchValue ? `?q=${searchValue}` : '';

  const { data } = await axios.get(`http://localhost:4000/stocks${queryString}`);

  return data;
};

const useGetStockList = (searchValue?: string) =>
  useQuery<IStock[]>(['Allocation', 'stocks', searchValue], () => fetchStockList(searchValue), {
    onError: (error) => {
      console.error('get stockList error', error);
    },
  });

export default useGetStockList;
