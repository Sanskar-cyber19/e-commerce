import { STRAPI_URL , STRAPI_TOKEN } from '@/utils/apiinfo'

export const getData = async (endpoint) =>{
	const options = {
  method: 'GET',
  headers: {
    'User-Agent': 'insomnia/8.6.1',
    Authorization: "Bearer " + STRAPI_TOKEN
  }
};
	const res = await fetch(`${STRAPI_URL}${endpoint}`,options);
	const data = await res.json();
	console.log(data);
	return data;
}