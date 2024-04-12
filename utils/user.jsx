let cuser = {
	name:'',
	email:'',
	orders:[]
};

import Router from 'next/router'

export function getName(){
	const userName = cuser.name;
	if(userName === undefined){
		console.log('login');
	}else{
	return userName;
	}
}

export function getOrder(){
	const order = cuser.orders;
	return order
	
}

export function getStatus(){
	const userName = cuser.name;
	if(userName === ''){
		return true;
	}else{
		return false;
	}
}

export function getEmail(){
	const userEmail = cuser.email;
	if(cuser.name !== ''){
		return userEmail
	}else{
	}
}

export async function createUser(name,email,password){
	const options = {
		method:'POST',
		headers: {
        'Content-Type': 'application/json',
      },
	  body: JSON.stringify({name,email,password})
	}
	const res = await fetch('/api/signup',options)
	if (res.ok){
		alert('ok')
	}else{
		alert('error')
	}
}

export async function findUser(email,password){
	const options = {
		method:'POST',
		headers: {
        'Content-Type': 'application/json',
      },
	  body: JSON.stringify({email,password})
	}
	const res = await fetch('/api/user',options)
	if (res.ok){
		const data = await res.json();
		cuser.orders = data.orders;
		cuser.name = data.name;
		cuser.email = data.email;
	}else{
		alert('error');
	}
}

export function signOut(){
	cuser.name = '';
	cuser.email = '';
	cuser.orders = [];
	Router.push("/")
	console.log('signout')
	return cuser
}