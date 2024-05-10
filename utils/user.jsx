import { STRAPI_URL , STRAPI_TOKEN } from '@/utils/apiinfo'

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

export const register = async (email,username,password)=>{
	const options = {
		  method: 'POST',
		  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
		  body: JSON.stringify({
			  email:email,
			  password:password,
			  username:username
		  })
};
	
	const res = await fetch(`${STRAPI_URL}/api/auth/local/register`,options)
	const data = await res.json()
	console.log(data);
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
		localStorage.setItem("user", JSON.stringify(data));
		Router.push('/profile')
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