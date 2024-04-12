import style from '@/styles/components/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function products({name,id,image,category,price,addToCart}){
	return(
		<>
			<main className={style.main}>
				<Image src={image} width={200} height={200} />
				<p className={style.detail}>
				<b>{name}</b><br/>
				<b>Category:</b>{category}<br/>
				<span className={style.line}>2100</span><b>{price}</b></p>
				<div className={style.buttons}>
					<Link href={`/product/${id}`}>
						<button className={style.buy}>buyNow</button>
					</Link>
					<button onClick={addToCart} className={style.cart}><FaShoppingCart /></button>
				</div>
			</main>
		</>
	)
}