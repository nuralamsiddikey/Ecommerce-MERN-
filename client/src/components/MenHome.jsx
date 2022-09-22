
import styles from '../styles/menHome.module.css'
import React, { useRef, useState } from "react";

import MenAndWomenProduct from '../slider/MenAndWomenProduct'



const MenHome = () => {
   const a ={
    textAlign:'center',
    fontSize:'3rem',
    marginBottom:'4rem',
    color:'#636e72'
   }

 const image =[
    {
        name:'Shirt',
        desc:'something',
        image:'https://imgs.search.brave.com/ezp_fWPbcZnWbZapfi6LErBHQy4FoQFtXI1z-J4f1h4/rs:fit:920:1190:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1zbGltLWZp/dC1tZW5zLWZ1bGwt/c2hpcnRzYnV0dG9u/LWZyb250LXNoaXJ0/Z2FybWVudGRyZXNz/c2hpcnRmdWxsc2xp/bS1maXQtMTQyMTUy/NjMwNjkzN3ZzZXV5/LnBuZw',
        price:200
    },
    {
        name:'T-shirt',
        desc:'something',
        image:'https://imgs.search.brave.com/OJwnuVRBB6pxUto_JH6LY-BaDgF908lWnfRfRMi6xDs/rs:fit:600:850:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZlLzQ2/LzBkLzZlNDYwZGQy/NTUzOTJiOGNhNjhi/NjgyNDg1MjVmODVm/LnBuZw',
        price:200
    },
    {
        name:'Coat',
        desc:'something',
        image:'https://imgs.search.brave.com/j4_nzOWP-cjZUzViV_Kx6Q7QXnjzhnltmYK-xa2VOE4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wdXJl/cG5nLmNvbS9wdWJs/aWMvdXBsb2Fkcy9s/YXJnZS9wdXJlcG5n/LmNvbS1qYWNrZXRj/bG90aGluZ2phY2tl/dGZhc2hpb24tbWVu/LWRyZXNzLXdlYXIt/Y2xvdGgtY29hdC1i/bGF6ZXItamFja2V0/LTYzMTUyMjMyNjg1/MGJwcmVtLnBuZw',
        price:200
    },
    {
        name:'Blazer',
        desc:'something',
        image:'https://imgs.search.brave.com/5NJutIyLRwsx_ak4cwp59EGcGYvQyubh5fOiBwdT1Jo/rs:fit:992:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3N1aXQtcG5nL3N1/aXQtaGFsbC1tYWRk/ZW4tMi5wbmc',
        price:200
    },
    {
        name:'Shirt',
        desc:'something',
        image:'https://imgs.search.brave.com/xipE5L0F44UP1TFCieiPzw1TyJrGsu88RxpqXsOgdkc/rs:fit:696:1195:1/g:ce/aHR0cHM6Ly9mcmVl/cG5naW1nLmNvbS90/aHVtYi9kcmVzcyUy/MHNoaXJ0LzI3LWRy/ZXNzLXNoaXJ0LXBu/Zy1pbWFnZS5wbmc',
        price:200
    }

 ]


  return (
    <div className={styles.container}>
     <h3 style={a}>Men's Fashion</h3>
        <div className={styles.wrapper}>
                
         <MenAndWomenProduct data={image}/>
                
        </div>

    </div>
  )
}






export default MenHome