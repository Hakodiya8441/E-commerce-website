import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage";
import { useEffect, useState } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import axios from "axios";
import SingleProduct from "./Components/singleProduct";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
function App() {

const [data,setData] =  useState([]) ; 
// fetch("https://dummyjson.com/products/")
//   .then((data)=>{
//    return data.json()
//   }).then((result)=>{
//     setData(result)
//     console.log(result)
//   })
useEffect(()=>{
  axios.get("https://fakestoreapi.com/products/")
  .then((response)=>{
    // console.log(response)
    setData(response.data)
    })
})

  return ( <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="" element={<Homepage productData = {data}/>}/>
    <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
  </Routes>
<Footer/>
  </BrowserRouter>
  
  </> );
}

export default App;