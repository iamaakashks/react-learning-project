import React, { useContext, useEffect, useState } from 'react';
import Cards from './Cards';
import Navbar from './Navbar.jsx';
import {ProductContext} from "../utils/Context.jsx"
import Loading from './Loading.jsx';
import { useLocation } from 'react-router-dom';
import axios from '../utils/axios.jsx';

export default function Home(){
    const [products] =  useContext(ProductContext);
    const {search} = useLocation();
    const categories = decodeURIComponent(search.split("=")[1]);
    const [filteredProducts, setfilteredProducts] = useState(null);

    // const getProductCategory = async () =>{
    //     try{
    //         const {data} = await axios.get(`/products/category/${categories}`);
    //         setfilteredProducts(data);
    //     }
    //     catch(err){
    //         console.log(err);
    //     }
    // }
    useEffect(()=>{
        
        setfilteredProducts(products);
        if(categories !== "undefined") {
            // getProductCategory()
            setfilteredProducts(products.filter((p) => {
                return p.category === categories
            }))
        }
    }, [categories, products])
    return (
        products ? <>
            <Navbar />
            <div className="w-[82%] px-7 ml-[18%] py-8 flex gap-4 flex-wrap">
                <Cards filterProducts={filteredProducts}/>
            </div>
        </> : <Loading/>
    )
}