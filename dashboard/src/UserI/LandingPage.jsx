import React from 'react'

const LandingPage = () => {
  return (
   <div class="flex flex-wrap bg-gradient-to-tr from-blue-100 from-10%  to-white to-50%">
    <div class="w-full sm:w-8/12 mb-10 ">
      <div class="container mx-auto h-full sm:p-10">
        <nav class="flex px-4 justify-between items-center">
          <div class="text-4xl font-bold">
            Shop<span class="text-green-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" class="w-8"/>
          </div>
        </nav>
        <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-4xl lg:text-6xl font-bold font-serif">Temukan product <span class="text-orange-400 font-serif">favorit</span> disini</h1>
            <div class="w-20 h-2 bg-orange-700 my-4"></div>
            <p class="text-xl mb-10">Mulai cari dan beli product yang anda ingin kan dimulai dari sini</p>
            <button class="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://placehold.net/400x600.png" alt="Leafs" class="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  )
}

export default LandingPage