import React, { useContext, useState } from "react"
import { ProductContext } from "../utils/Context";
import {nanoid} from "nanoid";
import { useNavigate } from "react-router-dom";

export default function Create(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [products, setProducts] = useContext(ProductContext);
    const AddProductHandler = (event) => {
        event.preventDefault();
        if(title.trim().length < 5) {
            alert("title should atleast have 5 letters");
            return;
        }
        const product = {
            id: nanoid(),
            title,
            image,
            category,
            price,
            description
        };
        
        setProducts([...products, product]);
        localStorage.setItem("products", JSON.stringify([...products, product]));
        navigate("/");
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form onSubmit={AddProductHandler} className="flex flex-col p-2 gap-2 border-[1px] shadow-2xl border-zinc-400 text-zinc-100 w-[40%] rounded-lg" action="/added-new-product">
                <h1 className=" tracking-tight font-bold text-xl text-zinc-900">Add new product</h1>
                <input required onChange={(event) => setTitle(event.target.value)} value={title} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md" type="text" placeholder="title" />
                <input required onChange={(event) => setImage(event.target.value)} value={image} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md" type="url" placeholder="image link" />
                <div className="flex justify-between ">
                    <input required onChange={(event) => setCategory(event.target.value)} value={category} className="w-[40%] bg-zinc-700 outline-none text-md p-1.5 rounded-md" type="text" placeholder="category" />
                    <input required onChange={(event) => setPrice(event.target.value)} value={price} className="w-[40%] bg-zinc-700 outline-none text-md p-1.5 rounded-md" type="number" placeholder="price" />
                </div>
                <textarea required onChange={(event)=> setDescription(event.target.value)} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md resize-none text-zinc-100" rows="5" placeholder="Description" value={description}></textarea>
                <button type="submit" className="px-3.5 py-2 bg-blue-600 text-zinc-100 rounded-lg w-24">Add</button>
            </form>
        </div>
    )
}