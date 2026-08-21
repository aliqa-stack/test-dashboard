import React from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi"


//not finished still working on it
const Page = () => {

    const type = [
        {id:0,name:"baju",brand:"zaro", harga:50000},           
        {id:1,name:"baju", brand:"zaro",harga:50000},
        {id:2,name:"baju", brand:"zaro",harga:50000},
        {id:3,name:"baju", brand:"zaro",harga:50000},
    ]

  return (
   <section className='flex items-center justify-center my-8'>
          
       <div className="grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-4 gap-6">
        {type.map((index) =>(
                <div key={index.id}>
                    <div className="row-span-3">
                        <article className='group relative h-72 w-62 overflow-hidden rounded-2xl border border-slate-400/70 bg-white p-3 text-white shadow-lg shadow-blue-200/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-300/70'>
                            <div className='pointer-events-none absolute -right-8 -top-8 h-28 rounded-m  bg-white/15 transition-transform duration-300 group-hover:scale-125' />
                            <div className='relative flex items-center justify-between'>
                                <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-black/20 shadow-inner shadow-white/20'>
                                    <FiShoppingBag size={17} className='text-black'/>
                                </span>
                                <span className='px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-50'>
                                    New
                                </span>
                            </div>
                            <div className='relative flex h-44 items-center justify-center'>
                                <div className='flex h-28 w-28 items-center justify-center  backdrop-blur-sm transition-transform duration-300 group-hover:scale-105'>
                                    <span className='text-center text-xl font-bold text-black capitalize tracking-wide'>
                                        {index.name}
                                    </span>
                                </div>
                            </div>
                            <div className='relative flex items-end  justify-between px-2  w-full border border-white/60 bg-white  text-slate-900 shadow-sm'>
                                <div>
                                    <p className='text-sm font-bold '>{index.brand}</p>
                                    <p className='text-[10px] font-medium uppercase tracking-wider text-slate-400'>Price</p>
                                    <p className='text-m font-bold leading-tight'>Rp {index.harga.toLocaleString('id-ID')}</p>
                                </div>
                                <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-transform duration-200 group-hover:rotate-45'>
                                    <FiArrowUpRight size={17} />
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            ))}
        </div>
            
         
    </section>
  )
}

export default Page