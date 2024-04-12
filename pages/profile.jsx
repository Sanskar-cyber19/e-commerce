import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import style from '@/styles/pages/Profile.module.css'
import { useEffect,useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { getName, getEmail, signOut, getOrder } from '@/utils/user'

export default function profile(){
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [order, setOrder] = useState([]);
	const tick = () =>{
	setName(getName());
	setEmail(getEmail());
	setOrder(getOrder());
	}
	useEffect(()=>{
		const timerID = setInterval(() => tick(), 1000);
		return () => clearInterval(timerID);
	},[])
	return(
		<>
			<div className={style.top}>
				<div className={style.flex}>
					<div className={style.image}>
						<FaUser />
					</div>
					<div className={style.info}>
						<b>Name: </b>{name}<br/>
						<b>Email: </b>{email}
					</div>
				</div>
				<button className={style.button} onClick={()=>signOut()}>signout</button>
			</div>
			<div className={style.table}>
				<table>
					<thead>
						<tr className={style.tr}>
							<th>Sr.No</th>
							<th>Order Number</th>
							<th>Date</th>
							<th>Bil</th>
							<th>payment Status</th>
							<th>product status</th>
						</tr>
					</thead>
					<tbody>
						{order.map((o)=>(
							<tr key={o.id} className={style.tr}>
								<td>{o.id}</td>
								<td>{o.orderNo}</td>
								<td>{o.date}</td>
								<td><Link href={o.bil}>bil</Link></td>
								<td>{o.payment}</td>
								<td>{o.product}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}