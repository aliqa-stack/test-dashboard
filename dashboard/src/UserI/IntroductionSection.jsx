import React from 'react'

const IntroductionSection = () => {
  return (

    //buat strekk le
    <div className='my-4'>
      <section className='min-h-64 w-full backdrop-blur-md px-6 sm:px-10 lg:px-16 py-12 border border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-indigo-50 to-white rounded-t-2xl flex flex-col lg:flex-row items-center justify-between gap-6'>
        
        <div className='flex-shrink-0'>
          <span className='inline-block bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1 lg:px-5 lg:py-2 shadow-lg shadow-blue-500/30 rounded-full font-semibold font-inter text-sm lg:text-base text-orange-300 tracking-wide'>
           Featured Catalog
          </span>
        </div>

        <div className='flex-1 text-center lg:text-left'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl font-serif text-orange-400 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-tight'>
            Temukan Product Luarbiasa
          </h1>
          <p className='mt-2 text-gray-600 text-sm lg:text-base font-light'>
            Cari Product yang cocok dengan mu
          </p>
        </div>

        <div className='flex-shrink-0'>   
          <span className='inline-block font-semibold font-inter text-indigo-600 border-2 border-indigo-200 bg-indigo-50 rounded-full px-4 py-2 text-sm hover:bg-indigo-100 transition-colors'>
            Browse Now →
          </span>
        </div>

      </section>
    </div>
  )
}

export default IntroductionSection