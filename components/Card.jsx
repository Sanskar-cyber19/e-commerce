import style from '@/styles/components/Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function products({image,name,oldPrice,price,slug}){
	return(
		<>
			<main className={style.main}>
				<Image src={image} width={200} height={200} />
				<p className={style.detail}>
				<b>{name}</b><br/>
				<span className={style.line}>{oldPrice}</span><b>{price}</b></p>
				<div className={style.buttons}>
					<Link href={`/product/${slug}`}>
						<button className={style.buy}>buyNow</button>
					</Link>
				</div>
			</main>
		</>
	)
}