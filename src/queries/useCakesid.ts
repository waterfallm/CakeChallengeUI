import { useQuery } from 'react-query';
import axios from 'axios';
// import { IAddress } from '../types';

const baseurl = "http://127.0.0.1:3000"

export const getCakes = async (id: string) => {

  const result = await axios.get(baseurl + `/api/cakes/${id}`);
  const cakes = result.data;
  return cakes;
};

const useCakesid = (id: string) =>
  useQuery<any>(['cake', id], () => getCakes(id), { refetchInterval: 30000 });

export default useCakesid;
