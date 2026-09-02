import React from 'react'
import { FiShoppingBag, FiArrowUpRight } from "react-icons/fi";
import {useState , useEffect} from 'react'

const Page = () => {
    //const type = [
        //{id:0, name:"baju", brand:"zaro", harga:50000, dekripsi:"baju yang sangat nyaman"},          
        //{id:1, name:"celana", brand:"dir", harga:50000, dekripsi:"baju yang sangat nyaman"},
        //{id:2, name:"jaket", brand:"yves", harga:50000, dekripsi:"baju yang sangat nyaman"},
        //{id:3, name:"hoodie", brand:"larph", harga:50000, dekripsi:"baju yang sangat nyaman"},
        //{id:4, name:"sepatu", brand:"zaro", harga:50000, dekripsi:"baju yang sangat nyaman"},
        //{id:5, name:"topi", brand:"zaro", harga:50000, dekripsi:"baju yang sangat nyaman"},
    //]

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
     useEffect(() => {
      const fetchProducts = async () => {
        try{
          const uri = "http://localhost:3000/product";
          const response = await fetch(uri, {
            headers:{
              Accept: "application/json",
            },
          });
          if(!response.ok){
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
          setProducts(data);

        }catch(error){
          console.error("Error fetching products:", error);
          setError(error.message);
        }finally{
          setLoading(false);
        }
      }
      fetchProducts();
     }, [])

     

     if(loading) return <div className='p-4 flex justify-center'><p className='text-lg font-medium text-orange-400'>loading product</p></div>
     if(error) return <div className='p-4'><p>Error:{error}</p></div>

  return (
    <section className='flex flex-col justify-center  p-4 bg-linear-to-br from-blue-50/40 to-slate-50/40'>
        {/* Shopping Bag Icon */}
        <div className='mb-6 flex items-center gap-2'>
            <FiShoppingBag size={28} className='text-blue-600' />
            <h2 className='text-xl font-bold text-gray-800'>Products</h2>
        </div>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  h-fit w-full max-w-7xl justify-items-center">
         {products.map((item) => (
            <article 
              key={item.id || item._id} 
              className='w-75 h-[500px] bg-white flex justify-between rounded-md overflow-hidden shadow sm relative text-center hover:shadow-lg hover:scale-105   transition-all duration-200'
            >
                <section className='w-full h-full object-cover  bg-gray-300'>
                  {item.barang}
                  <div className='absolute top-2 right-2 p-2 bg-white/30 backdrop-blur-md rounded-md shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer'>
                  <FiShoppingBag size={28} className='text-blue-600' />

                  </div>
                  </section>
                <div className='absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80 backdrop-blur-md'>
                    <p className="font-bold font-inter text-orange-400" >{item.brand}</p>
                    <p>Rp {item.harga ? item.harga.toLocaleString() : 0}</p>
                    <p className="text-sm text-gray-600">{item.deskripsi}</p>
                </div>
              
            </article>
         ))}
        </div>
    </section>
  )
}

export default Page