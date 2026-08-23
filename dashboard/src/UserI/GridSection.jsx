import React from 'react'

const GridSection = () => {
  return (
    <div className='flex justify-between justify-center p-4'>
        <section className="grid lg:grid-cols-6 lg:grid-rows-4 gap-2">
            <div className="lg:col-span-2 lg:row-span-4">
              <div className='shadow-lg hover:shadow-xl hover:shadow-slate-500 bg-linear-to-br from-blue-400  to-orange-100 hover:from-blue-600 duration-500 transition ease-in-out   rounded-2xl h-68 w-72'>
                <div className='p-4 '>
                <span className='font-inter text-lg font-bold text-white italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                <p className='font-sans text-lg lg:text-sm text-slate-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, veniam!</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 lg:row-span-2 lg:col-start-3">
              <div className='bg-linear-to-br from-blue-400 to-orange-100 h-full rounded-2xl shadow-lg hover:shadow-xl hover:shadow-slate-400 duration-200 transition-all'>
                <div className='p-4   '>
                <span className='font-bold text-xl font-inter '>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3">
              <div className='bg-linear-to-br from-blue-400 to-orange-100 rounded-2xl h-32 shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out '>
              <div className='p-4'>
                <span className='font-semibold text-xl font-inter '>Lorem ipsum dolor sit amet.</span>
              </div>
              </div>

            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3">
              <div className=' bg-linear-to-br from-blue-400 to-orange-100 rounded-2xl h-32 shadow-lg shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out  '>
              <div className='p-4 '>
                <span className='font-semibold text-xl font-inter'>Lorem ipsum dolor sit amet.</span>
              </div>
              </div>
            </div>
        </section>
    
    </div>
  )
}

export default GridSection