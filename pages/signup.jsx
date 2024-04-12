import React,{ useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { createUser } from '@/utils/user'
import Text from '@/components/Text'
import style from '@/styles/pages/Login.module.css'

export default function login(){
	const Router = useRouter();
	const [email,setEmail] = useState('')
	const [name,setName] = useState('')
	const [password,setPassword] = useState('')
	const [cpassword,setCPassword] = useState('')
	const signup = async (e) => {
		e.preventDefault();
		
		const response = await fetch('/api/signup',{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({name,email,password }),
		});
		
		if (response.ok){
			Router.push('/profile');
		} else {
			alert("try again")
		}
	};
	return(
		<>
			<div className={style.grid}>
				<Image src='/hero-img.png' className={style.image} width={600} height={500}/>
				<form onSubmit={signup} className={style.form}>
					<h1>Login Here.</h1>
					<Text type="text" text='text' icon='fa fa-user' value={name} onChange={setName}/>
					<Text type="text" text='Email' icon='fa fa-user' value={email} onChange={setEmail}/>
					<Text type="password" text='Password' icon='fa fa-key' value={password} onChange={setPassword}/>
					<Text type="password" text='confrim Password' icon='fa fa-key' value={cpassword} onChange={setCPassword}/>
					<button className={style.button} type='submit'>Login</button>
				</form>
			</div>
		</>
	)
}