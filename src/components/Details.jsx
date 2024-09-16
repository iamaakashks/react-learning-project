import React, { useContext, useEffect, useState } from 'react';
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import axios from '../utils/axios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';


export default function Details(){
    const [singleProduct, setSingleProduct] = useState(null);
    const {id} = useParams();
    const getSingleProduct = async()=>{
        try{
            const {data} = await axios.get(`/products/${id}`);
            setSingleProduct(data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingleProduct();
    }, [])
    return (
        singleProduct ? <>
            <div className="w-[50%] h-[50%] border-[1px] border-zinc-400 m-auto rounded-lg flex items-center">
                <div className="flex items-center justify-center w-[40%] rounded-l-lg h-full">
                    <img className='h-[40%] object-cover p-2 hover:scale-110 hover:transition-transform hover:duration-500' src={singleProduct.image} alt="" />
                </div>
                <div className="bg-neutral-400 h-[80%] w-[1px]"></div>
                <div className="h-full w-[60%] rounded-r-lg p-4 tracking-wider flex flex-col justify-center">
                    <h1 className="font-semibold text-lg leading-5">{singleProduct.title}</h1>
                    <h3 className="font-semibold opacity-30 text-sm">{singleProduct.category}</h3>
                    <div className="w-full mt-4 flex items-center justify-between">
                        <div className="flex gap-2"><h1 className="font-bold">{singleProduct.price}</h1><span className="line-through italic opacity-50">{singleProduct.price + 22}</span></div>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarHalfOutline />
                            </div>
                            <h4 className="tracking-tight text-sm">({singleProduct.rating.count})</h4>
                        </div>
                    </div>
                    <p className="leading-tight my-4 border-l-[1px] border-gray-300 pl-1 py-1 tracking-tight text-xs text-justify">{singleProduct.description}</p>
                    <div className="flex gap-4">
                        <button type='button' className="px-4 py-1.5 rounded-md bg-green-600 text-sm text-white">Add to Cart</button>
                        <button type='button' className="px-4 py-1.5 rounded-md bg-red-600 text-sm text-white">Remove</button>
                    </div>
                </div>
            </div>
        </> : <Loading />
    )
}