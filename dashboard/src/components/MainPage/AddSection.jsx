import React from 'react'
import {useState , useEffect} from 'react'

const AddSection = () => {

    const section = [
        {title : "Produk"},
        {title : "Brand"},
        {title : "Harga"},
    ]

    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const Addproducts = async (event) => {
            event.preventDefault();
            try{
                const uri = "http://localhost:3000/products"
                const response = await fetch(uri, {
                        method: "POST",
                        headers:{
                            'Content-type': 'application/json',
                        },                    
                })
                if(!response.ok){
                    throw new Error("failled adding product")
                }

                const data = await response.json()
                setProducts((prevProducts) => [...prevProducts, data]);

            }catch(error){
                console.error("error add product", error)
            }

        }
    }, []);

  return (
    <div>
        {section.map((index) => (
        <div key={index.title}>
        <label for="price" class="block text-sm/6 font-medium text-gray-900">{index.title}</label>
        <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
            <input id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
            
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
            </div>
            </div>
        </div>
        </div>
            

    ))}
  </div>

  )
}

export default AddSection