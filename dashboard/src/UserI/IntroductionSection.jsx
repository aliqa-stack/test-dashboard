import React from 'react'

const IntroductionSection = () => {
  return (

    //buat strekk le
    <div className='my-4 mx-8 p-4'>
     
    <div className="grid lg:grid-cols-4 lg:grid-rows-4 gap-4">
        <div className="lg:col-span-2 lg:row-span-4">
          <div className='bg-gradient-to-br from-blue-500 to-blue-400 h-full min-h-68 w-full rounded-2xl p-4'>
            <div className='mb-35'>
            <h1 className='font-inter font-bold text-xl text-white'>Lorem ipsum.</h1>
            <p className='font-inter text-sm text-white mt-2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <button className='cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black/70 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md'>explore</button>
          </div>
        </div>
        <div className="lg:row-span-4 lg:col-start-3">
        <div className='bg-gradient-to-br from-blue-600 to-blue-700 backdrop-blur-lg h-full min-h-68 w-full rounded-2xl p-4'>
          <div className='mb-20'>
            <div className='w-10 h-10 rounded-full bg-blue-400/30 backdrop-blur-md  ring-2 ring-orange-600 mb-2'><span></span></div>
            <h1 className='font-inter font-bold text-white text-xl'>Lorem ipsum dolor</h1>
            <h1  className='font-inter font-bold text-white text-xl' > sit amet.</h1>
          </div>
          <span className='mb-2 font-sans text-sm text-white/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
         
          </div>
        </div>
        <div className="lg:row-span-4 lg:col-start-4">
          <div className='bg-gray-200/50 backdrop-blur-lg h-full min-h-68 w-full rounded-2xl p-4'>
          <div className='mb-20'>
            <div className='w-10 h-10 rounded-full bg-blue-400/30 backdrop-blur-md  ring-2 ring-blue-400 mb-2'><span></span></div>
            <h1 className='font-inter font-bold text-black text-xl'>Lorem ipsum dolor</h1>
            <h1  className='font-inter font-bold text-black text-xl' > sit amet.</h1>
          </div>
          <span className='mb-2 font-sans text-sm text-black/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
      
          </div>
        </div>
    </div>
        
    </div>
  )
}

export default IntroductionSection