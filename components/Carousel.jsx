import Image from "next/image";
import Link from 'next/link';
import style from '@/styles/components/Carousel.module.css';
import { useEffect,useState } from 'react';

export default function Carousel() {
  return (
		<div className={style.main}>
        <div className="bd-example">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
				<img src="/bg1.jpg" className={style.img}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
             <img src="/bg1.jpg" className={style.img}/>

              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/bg1.jpg" className={style.img}/>

              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}
