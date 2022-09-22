import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



export default function MenAndWomenProduct(props) {
  const image = props.data

  return (
    <>
    
      <Swiper
        style={{background:'rgb(255, 255, 255)',height:'60vh'}}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
         
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={20}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          image.map(data => (
         
               <SwiperSlide >
              <img src={data.image} alt="" style={{
                width: '95%',
                height: '80%',
                objectFit: 'cover',
               
                margin: 'auto',
                 background: 'rgb(240, 240, 238)',
              
              }} />
                 
                 <div style={{height:'20%'}}>
                 <p style={{textAlign:'center',marginTop:'2rem',marginBottom:'0'}}>{data.name}</p>
                 <p style={{textAlign:'center',margin:'0'}}>{data.desc}</p>
                 <p style={{textAlign:'center'}}>{data.price}</p>
                 </div>
            
            </SwiperSlide>
          
         
          ))
        }


      </Swiper>
    </>
  );
}
