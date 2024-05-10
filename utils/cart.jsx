let cart=[];
let total = 0;
import {useState} from 'react'
import { getName } from '@/utils/user'
import Router from 'next/router'

export function getCart(){
	return cart;
}

export function getCount(){
	const count = cart.length;
	console.log(count);
	return count;
}

export function addToCart(product,qunanity){
	/*const userName = getName();
	if(userName === ''){
		Router.push('/login')
<<<<<<< HEAD
	}else{*/
		const price = product.Price
		const slug = product.slug
		if(qunanity === undefined){
			qunanity = 1;
		}
	const exist = cart.find(product => product.slug === slug);
	 console.log(exist)
=======
	}else{
	const amount = qunanity * price;
	const exist = cart.find(product => product.id === id);
>>>>>>> 031f04897ded3948049374998e3ac7ae1d36bc8e
	if(exist){
		console.log('working')
	}else{
<<<<<<< HEAD
		const amount = qunanity * price;
		const index = cart.length + 1;
		total = total + amount;
		cart.push({index,product,qunanity,amount});
=======
		cart.push({id,name,qunanity,price,amount});
    total = total + amount;
>>>>>>> 031f04897ded3948049374998e3ac7ae1d36bc8e
		console.log(cart);
	}
	return cart;
}

export function removeItem(id){
	cart = cart.filter(product => product.id !== id)
	total = cart.reduce((total,product)=>total + product.amount,0)
	return cart;
}

export function clearCart(){
	cart = [];
	return cart;
}

export function getTotal(){
	return total;
}