import React from 'react'
import shoes from '/public/shoes.png'

const LandingPage = () => {
  return (
    <main className='md:px-12 md:py-6 bg-blue-400'>
      <section className='relative min-h-[650px] bg-gradient-to-r from-blue-400 to-indigo-600
      w-full md:rounded-xl shadow-md'>
        <div className='flex justify-center items-center'>
          {/*  nav section */}

            {/*  hero section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[600px]'>
              <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4'>
              <h1 className='text-3xl pl-6 md:pl-14'>1.Sport</h1>
              <h1 className='text-5xl font-bold uppercase text-shadow-md font-inter'>Welcome</h1>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita fuga praesentium illum accusamus sit, asperiores aperiam voluptatum ea nisi ipsum magni iure molestiae amet soluta? Corporis sapiente consequatur deleniti!</p>
              <button className='border border-orange-400 px-4 py-2 rounded-e-lg'>Shop Now</button>
              </div>
              {/*  image section */}
              <div>
                <img src={shoes} alt="hero" className='relative z-10 w-[400px] img-shadow' />
              </div>
              {/*  blank section */}
              <div className='md:hidden'></div>
          </div>
        </div>        
              {/*  blank section */}
              <h1 className='text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute
              bottom-0 lg:bottom-15 w-full z-0 text-shadow font-serif'>
                AML
              </h1>

      </section> 
    </main>
  
  )
}

export default LandingPage