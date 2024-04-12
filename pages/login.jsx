import React,{ useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { findUser } from '@/utils/user'
import Text from '@/components/Text'
import style from '@/styles/pages/Login.module.css'

export default function login(){
	const Router = useRouter();
	const [name,setName] = useState('')
	const [password,setPassword] = useState('')
	const login = () => {
		findUser(name,password);
		console.log(name)
		Router.push('/profile');
	}
	return(
		<>
			<div className={style.grid}>
				<Image src='/hero-img.png' className={style.image} width={600} height={500}/>
				<div className={style.form}>
					<h1>Login Here.</h1>
					<Text type="text" text='Email' icon='fa fa-user' value={name} onChange={setName}/>
					<Text type="password" text='Password' icon='fa fa-key' value={password} onChange={setPassword}/>
					<button className={style.button} onClick={login}>Login</button>
				</div>
			</div>
		</>
	)
}