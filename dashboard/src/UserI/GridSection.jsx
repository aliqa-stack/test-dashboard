import React from 'react'
import Orangeshoes from '/public/orangeShoes.png'
import { MdFavorite } from "react-icons/md";

const GridSection = () => {
  return (
    <div className='flex justify-center p-4'>
      <section className="grid w-full  max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-5">
        <div className="sm:col-span-2 lg:col-span-2 lg:row-span-5">
          <div className='h-full min-h-68 w-full rounded-2xl bg-linear-to-br from-slate-900 to-slate-700 shadow-lg transition duration-500 ease-in-out hover:from-blue-600 hover:shadow-xl hover:shadow-slate-500'>
                <div className='p-4 '>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Limited Edition
                </span>
                <h3 className='font-inter text-5xl font-bold text-white italic'>Lorem</h3>
                </div>
              <div className='mt-4 flex justify-center'>
                <img  src={Orangeshoes} alt='hero' className='h-36'/>
              </div>
              <div className='flex justify-between'>
              <p className='relative bottom-4 ml-4 mt-4 text-md cursor-poiner text-white  hover:translate-x-2 transition-transform duration-300  font-inter font-medium '>Lihat →</p>
              <MdFavorite className='mr-4 text-lg text-red-600 hover:text-2xl transition-all duration-200'/>
              </div>
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-2 lg:row-span-5 lg:col-start-3">
              <div className='bg-linear-to-br from-blue-600 to-blue-700 h-full rounded-2xl shadow-lg hover:shadow-xl hover:shadow-slate-400 duration-200 transition-all'>
                <div className='p-4   '>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                Limited Edition
                </span>
                <h3 className='font-bold text-5xl font-inter '>Jordan </h3>
                </div>
              <div className='mt-4 flex justify-center'>
                <img  src={Orangeshoes} alt='hero' className='h-36'/>
              </div>
            <div className='flex justify-between'>
              <p className='relative bottom-4 ml-4 mt-4 text-md cursor-pointer text-white hover:translate-x-2 transition-transform duration-300  font-inter font-medium '>Lihat →</p>
              <MdFavorite className='mr-4 text-lg text-white hover:text-2xl transition-all duration-200'/>
              </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-5 lg:col-start-5 ">
              <div className='bg-white rounded-2xl lg:h-full  h-full shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out '>
              <div className='p-4   '>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-900">
                Limited Edition
                </span>
                <h3 className='font-bold mt-1 leading-none text-5xl font-inter text-slate-900 '>Lorem </h3>
              </div>
              <div className='mt-4 flex justify-center'>
                <img  src={Orangeshoes} alt='hero' className='h-36'/>
              </div>
               <div className='flex justify-between'>
              <p className='relative bottom-4 ml-4 mt-4 text-md cursor-pointer hover:translate-x-2 transition-transform duration-300  font-inter font-medium '>Lihat →</p>
              <MdFavorite className='mr-4 text-lg text-red-400'/>
              </div>
              </div>

            </div>
            <div className="lg:col-span-2 lg:row-span-5 lg:col-start-7">
              <div className='bg-linear-to-br from-orange-500 to-amber-400 rounded-2xl overflow-hidden min-h-72  flex flex-col  h-full shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out'>
                
              <div className='p-4'>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-50">
                Limited Edition
                </span>
                <h3 className='font-bold mt-1 leading-none text-5xl font-inter  text-white '>Pegasus</h3>
              </div>
              <div className='mt-4 flex justify-center'>
                <img  src={Orangeshoes} alt='hero' className='h-36'/>
              </div>
              <div className='flex justify-between'>
              <p className='relative bottom-4 ml-4 mt-4 text-md cursor-pointer hover:translate-x-2 transition-transform duration-300  font-inter font-medium '>Lihat →</p>
              <MdFavorite className='mr-4 text-lg text-blue-400 hover:text-2xl transition-all duration-200'/>
              </div>
              </div>
            </div>
        </section>
    
    </div>
  )
}

export default GridSection