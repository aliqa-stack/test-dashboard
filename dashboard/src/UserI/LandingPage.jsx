import React from 'react'

const LandingPage = () => {
  return (
   <div className="flex flex-wrap bg-gradient-to-br from-blue-500 from-10%  to-white to-50%">
    <div className="w-full sm:w-8/12 mb-10 ">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          <div className="text-4xl font-bold">
            Shop<span className="text-green-700">.</span>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8"/>
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif italic">Temukan product <span className="text-orange-400 font-serif">favorit</span> disini</h1>
            <div className="w-32 h-2 bg-orange-500 my-4"></div>
            <p className="text-xl mb-10">Mulai cari dan beli product yang anda ingin kan dimulai dari sini</p>
            <button className="bg-linear-to-r from-blue-500 to-indigo-600 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
          </div>
        </header>
      </div>
    </div>
    <img src="https://placehold.net/400x600.png" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12"/>
  </div>
  )
}

export default LandingPage