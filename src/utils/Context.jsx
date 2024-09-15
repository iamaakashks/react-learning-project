import axios from './axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export default function Context(props){
    const [products, setProducts] = useState(null);

    const getProducts = async()=>{
        try{
            const {data} = await axios("/products/");
            setProducts(data);
        }catch(error){
            console.log(error);
        }
    };
    useEffect(()=>{
        getProducts();
    }, []);
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}