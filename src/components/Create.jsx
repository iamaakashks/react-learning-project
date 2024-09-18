import React, { useState } from "react"

export default function Create(){
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const AddProductHandler = (event) => {
        event.preventDefault();
        const product = {
            title,
            image,
            category,
            price,
            description
        };
        console.log(product);
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form onSubmit={AddProductHandler} className="flex flex-col p-2 gap-2 border-[1px] border-red-400 text-zinc-100 w-[40%] rounded-lg" action="/added-new-product">
                <h1 className=" tracking-tight font-bold text-xl text-zinc-900">Add new product</h1>
                <input onChange={(event) => setTitle(event.target.value)} value={title} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md" type="text" placeholder="title" />
                <input onChange={(event) => setImage(event.target.value)} value={image} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md" type="url" placeholder="image link" />
                <div className="flex justify-between ">
                    <input onChange={(event) => setCategory(event.target.value)} value={category} className="w-[40%] bg-zinc-700 outline-none text-md p-1.5 rounded-md" type="text" placeholder="category" />
                    <input onChange={(event) => setPrice(event.target.value)} value={price} className="w-[40%] bg-zinc-700 outline-none text-md p-1.5 rounded-md" type="number" placeholder="price" />
                </div>
                <textarea onChange={(event)=> setDescription(event.target.value)} className="bg-zinc-700  outline-none text-md p-1.5 rounded-md resize-none text-zinc-100" rows="5" placeholder="Description" value={description}></textarea>
                <button type="submit" className="px-3.5 py-2 bg-blue-600 text-zinc-100 rounded-lg w-24">Add</button>
            </form>
        </div>
    )
}