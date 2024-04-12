import Card from '@/components/Card'
import style from '@/styles/pages/Products.module.css'
import Option from '@/components/Option'
import { useState, useEffect } from 'react'
import { getProduct, category } from '@/utils/product'
import { addToCart } from '@/utils/cart'


export default function products(){
	const [product, setProduct] = useState([]);
	const [filter,setFilter] = useState('');
	const products = (cproduct) => {
		setProduct(category(cproduct))
	}
	const cart = (id,name,qunanity,price) => {
		addToCart(id,name,qunanity,price);
	}
	useEffect(()=>{
		if (product.length === 0 ){
			setProduct(getProduct);
		}
	},[])
	return(
		<main className={style.main}>
			<div className={style.filter}>
				<h1>Filter</h1>
				<form className={style.buttons}>
					<Option value='all' product={()=>products('all')} />
					<Option value='ayur' product={()=>products('ayur')} />
					<Option value='real' product={()=>products('real')} />
					<Option value='ayuredge' product={()=>products('ayuredge')} />
				</form>
			</div>
			<div className={style.grid}>
				{product.map((p)=>(
					<Card key={p.id} id={p.id} name={p.name} image={p.image} category={p.category} price={p.price} addToCart={()=>addToCart(p.id,p.name,1,p.price)} />
				))}
			</div>
		</main>
	)
}