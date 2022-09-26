import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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

function App() {
  
  return (

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
    </Routes>

    <Footer/> 
    <ToastContainer />
  </BrowserRouter>

   

  );
}

export default App;
