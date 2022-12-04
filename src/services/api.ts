import axios from 'axios';
import md5 from 'js-md5';

const apiKey = (): { ts: number; apikey: string; hash: string } => {
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
  const timestamp = Number(new Date());
  const hash = md5.create();
  hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  return { apikey: PUBLIC_KEY, ts: timestamp, hash: hash.hex() };
};

const params = apiKey();

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params,
});

export default api;
