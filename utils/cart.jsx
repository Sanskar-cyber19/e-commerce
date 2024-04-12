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

export function addToCart(id,name,qunanity,price){
	const userName = getName();
	console.log(userName);
	if(userName === ''){
		alert('login')
		Router.push('/login')
	}else{
	const amount = qunanity * price;
	total = total + amount;
	const exist = cart.find(product => product.id === id);
	if(exist){
		alert('Remove product from cart and reselect with Quantity')
	}else{
		cart.push({id,name,qunanity,price,amount});
		console.log(cart);
	}
	return cart;
	}
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