import style from '@/styles/components/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import { FaHome,FaShoppingCart,FaBoxes,FaUser } from 'react-icons/fa'
import { getName, getEmail, getStatus } from '@/utils/user'

export default function Navbar(){
	const Router = useRouter();
	const logo = '/favicon.ico';
    return(
        <>
            <nav className={style.nav}>
				<div className={style.logo}>
					<Image src={logo} width={30} height={30}/>
					<h3>Grphic Design</h3>
				</div>
                <div className={style.grid}>
                    <Link
                    href="/"
                    className={style.navcon}>
                       <FaHome size="1.2em" />
						<span className={style.text}>Home</span>
                    </Link>
                    <Link
                    href="/products"
                    className={style.navcon}>
                        <FaBoxes size="1.2em" />
						<span className={style.text}>Products</span>
                    </Link>
                    <Link
                    href="/cart"
                    className={style.navcon}>
                        <FaShoppingCart size="1.2em" />
						<span className={style.text}>Cart</span>
                    </Link>
                    <Link
                    href="/profile"
                    className={style.navcon}>
                        <FaUser size="1.2em" />
						<span className={style.text}>Profile</span>
                    </Link>
                </div>
            </nav>
        </>
  );
}
