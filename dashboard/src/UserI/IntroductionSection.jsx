import React from 'react'

const IntroductionSection = () => {
  return (
    <div className='my-4'>
        <section className='h-80 w-full bg-blue-900/10 backdrop-blur-md p-16   border-1 border-blue-200  rounded-t-2xl flex items-center justify-between'>
                 <div className='w-24'>
                    <h1 className='inline-block bg-linear-to-br from-blue-400 to-indigo-500 px-3 py-1 shadow-lg shadow-slate-400 rounded-full 
                    font-semibold fon-inter text-sm'>Catalog</h1>
                 </div>
                  <h1 className='font-bold text-4xl font-inter text-yellow-400'>Lorem</h1>    
                  <div className='flex w-24 justify-end  border'>
                    <h2 className='font-bold font-inter text-yellow-500'>test</h2>
                  </div>
        </section>
    </div>
  )
}

export default IntroductionSection