
import styles from '../styles/womenHome.module.css'
import React, { useRef, useState } from "react";

import MenAndWomenProduct from '../slider/MenAndWomenProduct'



const WomenHome = () => {
   const a ={
    textAlign:'center',
    fontSize:'3rem',
    marginBottom:'4rem',
    color:'#636e72'
   }

 const image =[
    {
        name:'towel',
        desc:'something',
        image:'https://imgs.search.brave.com/4_7hr2LgwnLP6yij3NquASHX_9-IuNe33BANV__QTY0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxLzI4/L2JlLzgxMjhiZWM1/YmQ0NDVlZjFiMWQ5/ODAxNDIzODQ1YTA1/LnBuZw',
        price:200
    },
    {
        name:'towel',
        desc:'something',
        image:'https://imgs.search.brave.com/Yz0XtVIwoAfedmpg5rJ-M9qGa78lBzoufXi7Hx38QPM/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnQtbGlicmFyeS5j/b20vaW1hZ2VzX2sv/Z2lybC1jbGlwYXJ0/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQv/Z2lybC1jbGlwYXJ0/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/OS5wbmc',
        price:200
    },
    {
        name:'towel',
        desc:'something',
        image:'https://imgs.search.brave.com/aCyCE5xSyIs71pN1iI1084zXdh-qLGIqmN367VdKn-I/rs:fit:1101:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QyL2Q5/L2JhL2QyZDliYTJk/NDQ4NGUyNTk3NTZk/OTBlNTRlZWY0MTcy/LnBuZw',
        price:200
    },
    {
        name:'towel',
        desc:'something',
        image:'https://imgs.search.brave.com/bbGBWjBq8BmcDtmgscW0A4CKYUKHgRPRqjby_MoJOpI/rs:fit:571:800:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZHJlc3MvZHJl/c3NfUE5HNDMucG5n',
        price:200
    },
    {
        name:'towel',
        desc:'something',
        image:'https://imgs.search.brave.com/bbGBWjBq8BmcDtmgscW0A4CKYUKHgRPRqjby_MoJOpI/rs:fit:571:800:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZHJlc3MvZHJl/c3NfUE5HNDMucG5n',
        price:200
    }

 ]


  return (
    <div className={styles.container}>
     <h3 style={a}>Women's Fashion</h3>
        <div className={styles.wrapper}>
                
         <MenAndWomenProduct data={image}/>
                
        </div>

    </div>
  )
}






export default WomenHome