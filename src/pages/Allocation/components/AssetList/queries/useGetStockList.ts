/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IStock } from 'types/allocation';

const fetchStockList = async () => {
  const { data } = await axios.get('http://localhost:4000/stocks');
  return data;
};

const useGetStockList = () =>
  useQuery<IStock[]>(['Allocation', 'stocks'], () => fetchStockList(), {
    onError: (error) => {
      console.error('get stockList error', error);
    },
  });

export default useGetStockList;
