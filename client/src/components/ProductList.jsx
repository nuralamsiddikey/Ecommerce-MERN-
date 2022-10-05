import React from 'react';
import style from '../styles/ProductList.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import CardsProducts from './CardsProducts';
const queryString = require('query-string');

const ProductList = () => {
  const [products, setProducts] = useState([])
  const {search} = useLocation() 
  const parsed = queryString.parse(search);

  useEffect(()=>{
       fetch(`http://localhost:4001/api/product/allProducts/?type=${parsed.type}`)
       .then(res=>res.json())
       .then(data=>{
          setProducts(data.data)
          window.scrollTo(0, 0)
       })
      
     
  },[])

let allBrand = products.map(product=>product.brand)
let uniqueBrand = Array.from(new Set(allBrand))

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.left}>
                      <div>
                        <div style={{borderBottom:'1px solid lightgray',paddingBottom:'1.5rem'}}>
                            <h3>Related Categories</h3>
                            <p style={{color:'red'}}>Laptops</p>
                        </div>
                          <div style={{padding:'1.5rem 0',borderBottom:'1px solid lightgray',}}>
                            <h3>Brand</h3>
                            {uniqueBrand.map(brand=>(<div>
                                <input type="checkbox" id={brand} name={brand}/>
                                <label for={brand} style={{marginLeft:'1rem'}}>{brand}</label>
                            </div>))}

                          </div>
                         
                            <div style={{paddingTop:'1.5rem'}}>
                                <h3>Price</h3>
                                <Slider
                                    aria-label="Small steps"
                                    defaultValue={2000}
                                //  getAriaValueText={valuetext}
                                    step={100}
                                    marks
                                    min={10}
                                    max={10000}
                                    valueLabelDisplay="auto"
                                    onChange={(e)=>console.log(e.target.value)}
                                />
                           </div>

                      </div>
                </div>

                <div className={style.right}>
                  {products.map(product=><CardsProducts data={product}/>)}
            
      

                </div>
            </div>
          

        </div>
    );
};

export default ProductList;