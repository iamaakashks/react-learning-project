import React, { useContext } from 'react';
import Cards from './Cards';
import Navbar from './Navbar.jsx';
import {ProductContext} from "../utils/Context.jsx"
import Loading from './Loading.jsx';

export default function Home(){
    const [products] =  useContext(ProductContext);
    return (
        products ? <>
            <Navbar />
            <div className="w-[82%] px-7 ml-[18%] py-8 flex gap-4 flex-wrap">
                <Cards />
            </div>
        </> : <Loading/>
    )
}