import Image from "next/image";
import style from "@/styles/Home.module.css";
import React,{ useEffect, useState } from 'react'
import Link from 'next/link'
import { getQuantity, addToCart, clearCart } from "@/utils/cart"
import Carousel from '@/components/Carousel'
import Text from '@/components/Text'
import { getProduct,getAllCategory } from '@/utils/product'
import { FaClock } from 'react-icons/fa'

export default function Home() {
	const [category, setCategory] = useState([]);
	useEffect(()=>{
		setCategory(getAllCategory());
	},[])
  return (
    <main className={style.grid}>
		<Carousel />
			<center className="py-3"><h3>Categorys</h3></center>
		<div className={style.categorys}>
			{category.map((cat) => (
				<div key={cat.id} className={style.category}>
				<Image src="/favicon.ico" width={80} height={80} className={style.catimage}/><br/>
					<h5>{cat.name}</h5>
				</div>
			))}
		</div>
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
			  <div className="col-10 col-sm-8 col-lg-6">
				<img src="/img1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
			  </div>
			  <div className="col-lg-6">
				<h1 className="display-5 fw-bold lh-1 mb-3">Design Your Website</h1>
				<p className="lead">Design Awesome Website using Css tools for free. Quickly design and customize responsive website with CSSTOOLS.</p>
			  </div>
			</div>
		  </div>
		  
		  <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Features</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <h2><FaClock  size="1.5em"/><br/>Time Saving</h2>
        <p>We understand the importance of efficiency in web development. Our tools are 
		designed to save you time and effort, so you can focus on the big picture.</p>
      </div>
      <div className="feature col">
        <h2><i className="fa fa-handshake"></i><br/>User Friendly</h2>
        <p>Our user-friendly interface ensures that even beginners can navigate and use
		our tools with ease. No coding experience required!</p>
      </div>
      <div className="feature col">
        <h2><i className="fa fa-box-open"></i><br/>Open Source</h2>
        <p>We understand the required money for website design Our tools are 
		free and open soucres. No required any money.</p>
      </div>
    </div>
  </div>
    </main>
  );
}
