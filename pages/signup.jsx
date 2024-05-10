import React,{ useState } from 'react'
import Image from 'next/image'
import { register } from '@/utils/user'
import Text from '@/components/Text'
import style from '@/styles/pages/Login.module.css'

export default function login(){
	const [email,setEmail] = useState('')
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
	const [cpassword,setCPassword] = useState('')
	const signup = () => {		
		register(email,username,password);
	};
	return(
		<>
			<div className={style.grid}>
				<Image src='/hero-img.png' className={style.image} width={600} height={500}/>
				<div className={style.form}>
					<h1>Login Here.</h1>
					<Text type="text" text='text' icon='fa fa-user' value={username} onChange={setUsername}/>
					<Text type="text" text='Email' icon='fa fa-user' value={email} onChange={setEmail}/>
					<Text type="password" text='Password' icon='fa fa-key' value={password} onChange={setPassword}/>
					<Text type="password" text='confrim Password' icon='fa fa-key' value={cpassword} onChange={setCPassword}/>
					<button className={style.button} onClick={signup}>Login</button>
				</div>
			</div>
		</>
	)
}