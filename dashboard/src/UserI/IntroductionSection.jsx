import React from 'react'

const IntroductionSection = () => {
  return (

    //buat strekk le
    <div className='my-4 mx-8'>
     
    <div className="grid lg:grid-cols-5 lg:grid-rows-3 gap-4">
        <div className="lg:col-span-2 lg:row-span-3">
          <div className='bg-gradient-to-br from-blue-500 to-blue-400 h-full min-h-68 w-full rounded-lg p-4'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="lg:row-span-3 lg:col-start-3">
        <div className='bg-blue-300/30 backdrop-blur-lg h-full min-h-68 w-full rounded-lg p-4'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="lg:row-span-3 lg:col-start-4">
          <div className='bg-blue-300/30 backdrop-blur-lg h-full min-h-68 w-full rounded-lg p-4'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
        <div className="lg:row-span-3 lg:col-start-5">
            <div className='bg-blue-300/30 backdrop-blur-lgh-full min-h-68 w-full rounded-lg p-4'>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </div>
        </div>
    </div>
        
    </div>
  )
}

export default IntroductionSection