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
    'https://imgs.search.brave.com/s4_VukO299dxZ4mNm_VGW5xVtTOBOkr0bAf16DfQ2eE/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly93d3cu/YXV0aG9yc2d1aWxk/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDQvZWNv/bW1lcmNlLXN0b3Jl/LnBuZw',
    'https://imgs.search.brave.com/gqVJhpvM1YO-7SfXKSzXH7zBKqGUh2JT8VESgNDeClw/rs:fit:1000:525:1/g:ce/aHR0cHM6Ly9wcm9k/dWN0aW1pemUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA5L2VDb21tZXJj/ZS1SZXRhaWwuanBn',
   'https://imgs.search.brave.com/A7_a51LYUN6aK9NCHatjuYU3n1uF3QevQOh9fquPWdQ/rs:fit:1200:850:1/g:ce/aHR0cHM6Ly93d3cu/YmlndGVjaGlkZWFz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMS9FY29t/bWVyY2UtbWluLTEu/anBn',
   'https://imgs.search.brave.com/QrG1PyjL2Eyyvjc6ICp_iMuaKUbc-NbJjZ0xSEv44Rw/rs:fit:1200:516:1/g:ce/aHR0cHM6Ly93d3cu/cHJvZHVjdHBob3Rv/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wMy9lY29t/bWVyY2UtcHJvZHVj/dC1iYW5uZXIuanBn',
   'https://imgs.search.brave.com/NDLe0x12tp6I8GmExKTmd7kfJQ3fjF0myjDFDjIKm_4/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzczLzc2/L2NiLzczNzZjYmI2/NzgwNTg2ZjFhNGFl/YTdhMjkxMjc1ZmFl/LnBuZw',
   'https://imgs.search.brave.com/XIKsOU6knDF6V6HdZNuo9swTLHkothfroqoCxN5-Mes/rs:fit:600:400:1/g:ce/aHR0cDovL3dwLmNs/aXBwaW5nbWFnaWMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA1L2Vjb21t/ZXJjZS1wcm9kdWN0/LWltYWdlLWJhY2tn/cm91bmQtcmVtb3Zl/ci10b29sLnBuZw',
   'https://imgs.search.brave.com/2pgp-tnoPO1pK8VtjoohAaQt6r0sDD8Ni5lX1YBXO3s/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pbWFn/Z2EuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvaGVhZGxlc3Nf/ZWNvbW1lcmNlLmpw/Zw'

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
