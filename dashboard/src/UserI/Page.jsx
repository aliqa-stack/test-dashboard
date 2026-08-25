import React from 'react'
import { FiShoppingBag, FiArrowUpRight } from "react-icons/fi";

const Page = () => {
    const type = [
        {id:0, name:"baju", brand:"zaro", harga:50000},          
        {id:1, name:"celana", brand:"dir", harga:50000},
        {id:2, name:"jaket", brand:"yves", harga:50000},
        {id:3, name:"hoodie", brand:"larph", harga:50000},
        {id:4, name:"sepatu", brand:"zaro", harga:50000},
        {id:5, name:"topi", brand:"zaro", harga:50000},
    ]

  return (
    <section className='flex justify-center  p-4 bg-linear-to-br from-blue-50/40 to-slate-50/40'>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  h-fit w-full max-w-7xl justify-items-center">
         {type.map((item) => (
            <article 
              key={item.id} 
              className='group relative h-72 lg:h-80 w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-400/70 bg-white p-3 text-white shadow-lg shadow-blue-200/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-300/70'
            >
                <div className='pointer-events-none absolute -right-8 -top-8 h-28 bg-white/15 transition-transform duration-300 group-hover:scale-125' />
                
                <div className='relative flex items-center justify-between'>
                    <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-orange-200 shadow-inner shadow-white/20'>
                        <FiShoppingBag size={17} className='text-orange-500'/>
                    </span>
                    <span className='px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-orange-500'>
                        New
                    </span>
                </div>

                <div className='relative flex h-36 items-center justify-center'>
                    <div className='flex h-28 w-28 items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-105'>
                        <span className='text-center text-xl font-bold text-black capitalize tracking-wide font-[Roboto]'>
                            {item.name}
                        </span>
                    </div>
                </div>

                <div className='relative flex items-end justify-between p-2 w-full border border-slate-200 bg-white text-slate-900 shadow-sm rounded-xl'>
                    <div>
                        <p className='text-sm font-bold font-[Roboto]'>{item.brand}</p>
                        <p className='text-[10px] font-medium uppercase tracking-wider text-slate-400'>Price</p>
                        <p className='text-sm font-semibold leading-tight font-inter'>Rp {item.harga.toLocaleString('id-ID')}</p>
                    </div>
                    <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform duration-200 group-hover:rotate-45'>
                        <FiArrowUpRight size={17} />
                    </span>
                </div>
            </article>
         ))}
        </div>
    </section>
  )
}

export default Page