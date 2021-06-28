import { useQuery } from 'react-query';
import axios from 'axios';
// import { IAddress } from '../types';

const baseurl = "http://127.0.0.1:3000"

export const getCakes = async () => {
  // const result = await axios.get(`/api/addresses/${id}`);
  const result = await axios.get(baseurl + `/api/cakes`);
  const cakes = result.data;
  return cakes;
};

const useCakes = () =>
  useQuery<{ id: string, name: string, comment: string, imageUrl: string, yumFactor: number }[]>('cakelist', () => getCakes(), { refetchInterval: 30000 });

export default useCakes;
