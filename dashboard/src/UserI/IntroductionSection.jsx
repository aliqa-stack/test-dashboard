import React from 'react'

const IntroductionSection = () => {
  return (
    <div className='my-4'>
      <section className='min-h-64 w-full  backdrop-blur-md px-6 sm:px-10 lg:px-16 py-10 border border-2 border-blue-300 bg-linear-to-br from-blue-100 to-white rounded-t-2xl flex items-center justify-between'>
        
        <div>
          <span className='inline-block bg-gradient-to-br from-blue-300 to-indigo-400 px-4 py-2 shadow-lg shadow-blue-950/20 rounded-full font-semibold font-inter text-md text-orange-500'>
            Catalog
          </span>
        </div>

        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl font-serif italic text-orange-400'>
          Lorem
        </h1>

        <div className='flex justify-end'>
          <span className='font-semibold font-inter text-orange-400 border border-blue-500/30 rounded-full px-3 py-1 text-sm'>
            test
          </span>
        </div>

      </section>
    </div>
  )
}

export default IntroductionSection