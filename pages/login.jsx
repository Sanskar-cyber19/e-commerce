import React,{ useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { findUser } from '@/utils/user'
import Text from '@/components/Text'
import style from '@/styles/pages/Login.module.css'
import Cookies from 'js-cookie'

export default function login(){
	const Router = useRouter();
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	useEffect(()=>{
		let data = localStorage.getItem("user");
		if(data){
			console.log(data);
		}else{
			alert('error')
		}
	},[])
	return(
		<>
			<div className={style.grid}>
				<Image src='/hero-img.png' className={style.image} width={600} height={500}/>
				<div className={style.form}>
					<h1>Login Here.</h1>
					<Text type="text" text='Email' icon='fa fa-user' value={email} onChange={setEmail}/>
					<Text type="password" text='Password' icon='fa fa-key' value={password} onChange={setPassword}/>
					<button className={style.button} onClick={()=>findUser(email,password)}>Login</button>
				</div>
			</div>
		</>
	)
}