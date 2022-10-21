import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React,{useEffect,createContext} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetails from "./components/ProductDetails";
 export const CartContext = createContext()


 export const  App=()=> {
  let [cartProduct, setCartProduct] = React.useState([])
  let token = localStorage.getItem('token')

  useEffect(()=>{
    if(token){
        fetch('http://localhost:4001/api/cart/get', {
            headers: {
                'token': `${token}`
            }
        })
            .then(res => res.json())
            .then(result => {
                setCartProduct( result.data)
              
            })
    }
},[])






  return (
    <CartContext.Provider value={{cartProduct,setCartProduct}}>
         <BrowserRouter>
    <div>
          <TopHeader/>
           <Header/>
           <Navbar/>  
    </div>

    <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route  path="/productDetail" element={<ProductDetails/>}/>
    </Routes>

        <Footer/> 
        <ToastContainer />
      </BrowserRouter>
    </CartContext.Provider>

  );
}


