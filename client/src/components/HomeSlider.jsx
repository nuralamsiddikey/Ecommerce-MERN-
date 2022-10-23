import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import styles from '../styles/homeSlider.module.css'


export default function HomeSlider() {

  const image = [
    'https://icms-image.slatic.net/images/ims-web/3531be11-56ab-42d6-8ce5-5d174b5bc01a.jpg',
    'https://priyoshopbackup.blob.core.windows.net/priyoshop/content/Images/Thumbs/0242521.jpeg',
    'https://imgs.search.brave.com/A7_a51LYUN6aK9NCHatjuYU3n1uF3QevQOh9fquPWdQ/rs:fit:1200:850:1/g:ce/aHR0cHM6Ly93d3cu/YmlndGVjaGlkZWFz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMS9FY29t/bWVyY2UtbWluLTEu/anBn',
    'https://imgs.search.brave.com/QrG1PyjL2Eyyvjc6ICp_iMuaKUbc-NbJjZ0xSEv44Rw/rs:fit:1200:516:1/g:ce/aHR0cHM6Ly93d3cu/cHJvZHVjdHBob3Rv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMy9lY29t/bWVyY2UtcHJvZHVj/dC1iYW5uZXIuanBn',
    'https://imgs.search.brave.com/NDLe0x12tp6I8GmExKTmd7kfJQ3fjF0myjDFDjIKm_4/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzc2/L2NiLzczNzZjYmI2/NzgwNTg2ZjFhNGFl/YTdhMjkxMjc1ZmFl/LnBuZw',

  ]


  return (
    <>
      <Swiper
        style={{marginTop:'-1rem'}}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        // className="mySwiper"
      >
        {
          image.map(data=>(
            <SwiperSlide style={{
                background:`url(${data}) no-repeat center center`,
                height: '70vh',
                backgroundSize:'cover'
            }}></SwiperSlide>
          ))
        }
       
      
      
      </Swiper>
    </>
  );
}
