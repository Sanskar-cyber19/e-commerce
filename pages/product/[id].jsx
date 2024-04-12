import { useRouter } from 'next/router'
import products from '@/data/db.json'

export default function product(){
	const Router = useRouter();
    const product = products[Router.query.id];
    //if (!product) return <p></p>
	if(!product) return <p>not working</p>
	console.log(product);
	return(
		<p>hii its working{product.name}</p>
	)
}