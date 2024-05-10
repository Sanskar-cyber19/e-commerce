import { useRouter } from 'next/router'
import { getData } from '@/utils/product'
import Link from 'next/link'
import Image from 'next/image'
import style from '@/styles/pages/ProductView.module.css'
import { useState } from 'react';
import { addToCart } from '@/utils/cart'

export default function product({info}){
	const [qunanity, setQunanity] = useState(1);
	const [amount, setAmount] = useState(0);
	const decrement = () => {
		if (qunanity !== 1){
		setQunanity(qunanity => qunanity - 1)
		}
	}
	const increment = () => {
		if (qunanity === 10){
			alert('max')
		}else{
			setQunanity(qunanity => qunanity + 1)
		}
	}
	const addcart = (id, name,qunanity,price) => {
		addToCart(id,name,qunanity,price);
	}
	const buy = () => {}
	
	const product = info?.data?.[0]?.attributes
	return(
	<main className={style.main}>
		<div className={style.body}>
			<div className={style.images}>
				<Image src='/favicon.ico' width={200} height={200} />
			</div>
			<div>
				<b className="display-5 fw-bold lh-1">{product.Name}</b><br/>
				<b>{product.category}</b>
				<br/><br/>
				<b>MRP : {product.Price}</b><br/>
				<span className={style.tax}>incl. all taxes.<br />
				(also includes all applicative taxes)</span>
				<div className={style.qunanity}>
					<span onClick={decrement}>-</span>
					<span>{qunanity}</span>
					<span onClick={increment}>+</span>
				</div>
				<button className={style.buy} onClick={buy}>Buy Now</button><br/>
				<button className={style.cart} onClick={()=>addcart(product,qunanity)}>add to Cart</button>
				<hr/>
				<p>
					<b>Deatail</b><br/>
					{product.Description}
				</p>
			</div>
		</div>
    </main>
	)
}

export async function getStaticPaths(){
	const products = await getData('/api/products?populate=*');
	const paths = products?.data?.map((c)=> ({
		params:{
			slug:c.attributes.slug,
		},
	}))
	
	return {
		paths,
		fallback:false
	}
}

export async function getStaticProps({ params: { slug } }){
	const info = await getData(`/api/products?filters[slug][$eq]=${slug}`);
	console.log(info);
		return{ 
		props:{info}
	};
}