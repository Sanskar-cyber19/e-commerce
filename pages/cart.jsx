import Image from "next/image";
import Link from "next/link"
import style from "@/styles/pages/Cart.module.css";
import { getCart, getCount, clearCart, removeItem, getTotal } from "@/utils/cart"
import Router from 'next/router'
import React,{ useEffect, useState } from 'react'

export default function cart() {	
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [count, setCount] = useState(0);
	const [chagre, setChagre] = useState(0);
	useEffect(()=>{
		setCart(getCart());
		setTotal(getTotal());
		setCount(getCount());
		console.log(cart);
	},[])
  return (
    <main className={style.main}>
		<h3>Cart</h3>
		<div className={style.grid}>
			<h6>Sr.No</h6>
			<h6>Name</h6>
			<h6>Price</h6>
			<h6>Qunanity</h6>
			<h6>Amount</h6>
		</div>
		{cart.map((cp) => (
			<div className={style.grid} key={cp.id}>
				<div>{cp.index}</div>
				<div>{cp.product.Name}</div>
				<div>{cp.product.Price}</div>
				<div>{cp.qunanity}</div>
				<div>{cp.amount}</div>
				<div onClick={()=>{
					setCart(removeItem(cp.id));
					setTotal(getTotal());
					setCount(getCount());
				}}>remove</div>
			</div>
		))}
		<div className={style.grid}>
			<div className={style.order}><h6>Total</h6></div>
			<div>{total}</div>
		</div>
		<div className={style.grid}>
			<div className={style.order}><h6>Total Item</h6></div>
			<div>{count}</div>
		</div>
		<div className={style.grid}>
			<div className={style.order}><h6>D charge</h6></div>
			<div>{chagre}</div>
		</div>
		<div className={style.grid}>
			<div className={style.order}><h6>Final Total</h6></div>
			<div>{total+chagre}</div>
		</div>
		<div className={style.button}>
			<button className={style.btn} onClick={()=>Router.push("/order")}>Order Now</button>
			<button className={style.btn} onClick={()=> setCart(clearCart())}>clear</button>
		</div>
    </main>
  );
}
