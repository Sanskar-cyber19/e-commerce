import style from '@/styles/components/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){
    return(
        <div className={style.footer}>
			<div className={style.grid}>
				<div className={style.block}>
					<div>Company Name</div>
					<div>hii this my first e commerce website whiche design by me and this is my best design</div>
					<div>icons</div>
				</div>
				<div className={style.block}>
					<h3>Links</h3>
					<Link href="/" className={style.link}>CSS TOOLS</Link>
					<Link href="/" className={style.link}>E commerce</Link>
					<Link href="/" className={style.link}>Project OS</Link>
					<Link href="/" className={style.link}>Material Kit</Link>
				</div>
				<div className={style.block}>
					<h3>Links</h3>
					<p>
						Moblie:9156559179;<br/>
						Addresss:Baramati Dist:pune<br/>
						Sate:maha, India <br/>
						Pincode:413102<br/><br/>
						Phone no.9156559179<br/>
						email:fg9085842007@gmail.com
					</p>
				</div>
			</div>
			<hr/>
			<div className={style.bottom}>
				<div className={style.left}>
					<Image src="/favicon.ico" width={30} height={30} /> Graphic Design
				</div>
				<div className={style.center}>CopyRight:2024 All Rights reseved by bandgar sanskar</div>
				<div className={style.right}>Prowed by vercel amd nextjs</div>
			</div>
        </div>
        
    )
}