import Image from "next/image";
import Link from "next/link"
import styles from "@/styles/Home.module.css";
import { getCart, getCount, clearCart, removeItem, getTotal } from "@/utils/cart"
import React,{ useEffect, useState } from 'react'

export default function cart() {	
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [count, setCount] = useState(0);
	useEffect(()=>{
		setCart(getCart());
		setTotal(getTotal());
		setCount(getCount());
		console.log(cart);
	},[])
  return (
    <main className={styles.grid}>		
		{cart.map((cp)=>(
			<p key={cp.id}>{cp.name}-{cp.qunanity}-{cp.price}-{cp.amount}-{cp.id}
			<button onClick={()=>{
				setCart(removeItem(cp.id));
				setTotal(getTotal());
				setCount(getCount());
				}}>remove</button></p>
		))}
		{total} - {count}
		<button onClick={()=> setCart(clearCart())}>clear</button>
		<Link href="/order">order</Link>
    </main>
  );
}
