import React from 'react'
import {useState} from 'react'

const AddSection = () => {

    

    
    const [barang, setBarang] = useState("");
    const [brand, setBrand] = useState("");
    const [harga, setHarga] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [loading, setLoading] = useState(true);
    
    const section = [
        {id: "product", title: "Produk", state: barang, setState: setBarang},
        {id: "brand", title: "Brand", state: brand, setState: setBrand},
        {id: "harga", title: "Harga", state: harga, setState: setHarga},
        {id: "deskripsi", title: "Deskripsi", state: deskripsi, setState: setDeskripsi},
    ]
        const Addproducts = async (event) => {
            event.preventDefault();
            setLoading(true);
            try{
                const uri = "http://localhost:3000/product"
                const response = await fetch(uri, {
                        method: "POST",
                        headers:{
                            'Content-type': 'application/json',
                        },     
                        body: JSON.stringify({Barang: barang, Brand: brand, Harga: parseInt(harga), Deskripsi: deskripsi})               
                })
                if(!response.ok){
                    throw new Error("failled adding product")
                }

                const data = await response.json()
                setBarang("");
                setBrand("");
                setHarga("");
                setDeskripsi("");
                console.log("product added successfully", data)

            }catch(error){
                console.error("error add product", error)
            }finally{
                setLoading(false)
            }

        }

       

  return (
    <div>
        <form onSubmit={Addproducts} class="space-y-6">
        {section.map((index) => (
        <div key={index.id}>
        <label for={index.id} class="block text-sm/6 font-medium text-gray-900">{index.title}</label>
        <div class="mt-2">
            <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"></div>
            <input id={index.id} type={index.id === "harga" ? "number" : "text"} value={index.state} onChange={(e) => index.setState(e.target.value)}  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
            <div class="grid shrink-0 grid-cols-1 focus-within:relative">
            
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
            </div>
            </div>
        </div>
       
        </div>
       ))}
       <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200'
       type='submit'>
        {loading ? "Add product..." : "Add Product"}       
        </button>
       </form>
  </div>

  )
}

export default AddSection