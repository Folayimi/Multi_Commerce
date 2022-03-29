import React from 'react';
import './index.css';
import Home from './Components/home';
import Navbar from './Navbar';
import Footer from './Footer';
import Product from './Components/Generals/Product';
import Category from "./Components/Generals/Category";
import Item from "./Components/Generals/Item";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react/cjs/react.development';
function App(){
   const [size,setSize] = useState(window.innerWidth);
   const [onMobile,setOnMobile] = useState(false);
   useEffect(()=>{
      window.addEventListener('resize',()=>{
         setSize(window.innerWidth);
      });
      window.removeEventListener('resize',()=>{
         setSize(window.innerWidth);
      })
      if(size<=470){
         setOnMobile(true);
      }
      else{
         setOnMobile(false);
      }
   },[size]);
     
   return (
         <>
            <Router>
               <Navbar onMobile={onMobile}/>            
               <Routes>
                  <Route exact path="/" element={<Home onMobile={onMobile}/>}/>                  
                  <Route path="/home" element={<Home onMobile={onMobile}/>}/>                              
                  <Route path="/categories/:name" element={<Category onMobile={onMobile}/>}/>
                  <Route path="/products/:name" element={<Product/>}/>
                  <Route path="/items/:name" element={<Item/>}/>
               </Routes>
               <Footer/>
            </Router>
         </>
      )
   }

export default App;