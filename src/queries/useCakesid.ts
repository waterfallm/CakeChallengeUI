import { useQuery } from 'react-query';
import axios from 'axios';
// import { IAddress } from '../types';

const baseurl = "https://home1.ball-coin.com"

export const getCakes = async (id: string) => {

  const result = await axios.get(baseurl + `/api/cakes/${id}`);
  const cakes = result.data;
  return cakes;
};

const useCakesid = (id: string) =>
  useQuery<any>(['cake', id], () => getCakes(id), { refetchInterval: 30000 });

export default useCakesid;
