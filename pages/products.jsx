import Card from '@/components/Card'
import style from '@/styles/pages/Products.module.css'
import Option from '@/components/Option'
import { getData } from '@/utils/product'
import { useState, useEffect } from 'react'
import { addToCart } from '@/utils/cart'


export default function products({products}){
	const [filter,setFilter] = useState('');
	const cart = (id, name,qunanity,price) => {
		addToCart(id,name,qunanity,price);
	}
	
	const category = (category) => {
		const filter = products.filter(product => product.category === category);
		console.log(filter)
		setProduct(filter);
	}

	return(
		<main className={style.main}>
			<div className={style.filter}>
				<h1>Filter</h1>
				<form className={style.buttons}>
					<Option value='ayur' product={()=>category('ayur')} />
					<Option value='real' product={()=>category('real')} />
					<Option value='ayuredge' product={()=>category('ayuredge')} />
					<button className={style.btn} onClick={()=>setProduct(products)}>clear Filter</button>
				</form>
			</div>
			<div className={style.grid}>
				{products?.data?.map((p)=>(
					<Card key={p?.id} 
					name={p?.attributes?.Name}
					price={p?.attributes?.Price}
					oldPrice={p?.attributes?.OriginalPrice}
					slug={p?.attributes?.slug}/>
				))}
			</div>
		</main>
	)
}


export async function getStaticProps(){
	const products = await getData('/api/products');
	//const products = await res.json();
	console.log(products);
		return{ 
		props:{products}
	};
}