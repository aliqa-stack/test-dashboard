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
    <section className='flex flex-col justify-center p-4 bg-linear-to-br from-blue-50/40 to-slate-50/40'>
  {/* Shopping Bag Icon */}
  <div className='mb-6 flex items-center gap-2'>
    <FiShoppingBag size={28} className='text-blue-600' />
    <h2 className='text-xl font-bold text-gray-800'>Products</h2>
  </div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-fit w-full max-w-7xl justify-items-center">
    {products.map((item) => (
      <article
        key={item.id || item._id}
        className='w-75 h-[420px] bg-white flex flex-col rounded-xl overflow-hidden shadow-sm border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
      >
        {/* Image / Placeholder area soon wil be image for this*/}
        <div className='relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
          <span className='text-gray-400 text-sm'>{item.barang}</span>

          <button className='absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-md rounded-full shadow-md hover:bg-white hover:shadow-lg transition-all duration-200 cursor-pointer'>
            <FiShoppingBag size={20} className='text-blue-600' />
          </button>
        </div>

        {/* Content area */}
        <div className='flex flex-col flex-1 p-4 text-left'>
          <p className='text-xs font-semibold uppercase tracking-wide text-orange-500 mb-1'>
            {item.brand}
          </p>

          <h3 className='font-semibold text-gray-800 line-clamp-1'>
            {item.barang}
          </h3>

          <p className='text-sm text-gray-500 line-clamp-2 mt-1 flex-1'>
            {item.deskripsi}
          </p>

          <div className='mt-3 pt-3 border-t border-gray-100 flex items-center justify-between'>
            <p className='font-bold text-gray-900'>
              Rp {item.harga ? item.harga.toLocaleString() : 0}
            </p>
            <button className='text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors'>
              Detail
            </button>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
  )
}

export default Page