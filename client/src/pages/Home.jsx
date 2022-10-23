import React from 'react'
import HomeSlider from './../components/HomeSlider';
import MenHome from '../components/MenHome';
import WomenHome from '../components/WomenHome';
import TopSellingProducts from '../components/TopSellingProducts';

const Home = () => {
 
  return (
    <div>
        <HomeSlider/>
        <TopSellingProducts/>
        <MenHome/> 
        <WomenHome/> 
     
    </div>
  )
}

export default Home