import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading.jsx';

export default function Cards({filterProducts}){
    const [products] =  useContext(ProductContext);
    return (
        products? <>
            {
                filterProducts && filterProducts.map((product, index)=>{
                    return (
                        <Link to={`/item-details/${product.id}`} key={index} className="w-64 h-72 bg-white rounded-lg border-[1px] border-gray-400">
                            <div className="h-[70%] w-[100%] rounded-t-lg border-b-[1px]">
                                <img className='select-none hover:scale-125 hover:transition-transform hover:duration-300 h-full m-auto p-8' src={product.image} alt="" />
                            </div>
                            <div className="h-[30%] rounded-b-lg flex flex-col p-2 gap-2">
                                <div className="flex flex-col">
                                <h1 className="text-sm tracking-tight font-medium">{
                                        product.title.length <= 38 ? product.title : product.title.slice(0, 30) + "..."
                                    }</h1>
                                <h4 className="flex content-end text-xs opacity-60 font-semibold">{product.category}</h4>
                                </div>
                                <div className="flex gap-2 text-sm"><h3 className="font-semibold">$ {product.price}</h3><span className="select-none line-through opacity-40 italic">{products.price}</span></div>
                            </div>
                        </Link>
                    )
                })
            }
        </> : <Loading />
    )
}