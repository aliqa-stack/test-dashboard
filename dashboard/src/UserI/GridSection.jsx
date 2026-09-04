import React from 'react'

const GridSection = () => {
  return (
    <div className='flex justify-center p-4'>
      <section className="grid w-full  max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-8 lg:grid-rows-5">
        <div className="sm:col-span-2 lg:col-span-2 lg:row-span-5">
          <div className='h-full min-h-68 w-full rounded-2xl bg-linear-to-br from-cyan-500 to-blue-400 shadow-lg transition duration-500 ease-in-out hover:from-blue-600 hover:shadow-xl hover:shadow-slate-500'>
                <div className='p-4 '>
                <span className='font-inter text-lg font-bold text-white italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                <p className='font-sans text-lg lg:text-sm text-slate-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, veniam!</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 lg:col-span-2 lg:row-span-5 lg:col-start-3">
              <div className='bg-linear-to-br from-blue-500 to-indigo-400 h-full rounded-2xl shadow-lg hover:shadow-xl hover:shadow-slate-400 duration-200 transition-all'>
                <div className='p-4   '>
                <span className='font-bold text-xl font-inter '>Lorem ipsum dolor sit amet consectetur.</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-5 lg:col-start-5 ">
              <div className='bg-linear-to-br from-violet-500 to-fuchsia-400 rounded-2xl lg:h-full  h-full shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out '>
              <div className='p-4'>
                <span className='font-semibold text-xl font-inter '>Lorem ipsum dolor sit amet.</span>
              </div>
              </div>

            </div>
            <div className="lg:col-span-2 lg:row-span-5 lg:col-start-7">
              <div className='bg-linear-to-br from-orange-500 to-amber-400 rounded-2xl h-full shadow-lg hover:shadow-xl hover:shadow-slate-500 duration-400 transition ease-in-out'>
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