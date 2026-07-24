import React from 'react'

const Header = () => {
  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
     border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
        {/* Left element */}
        <div className='flex  items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors '>
                menu
                </button>
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-black text-slate-800 dark:text-white '>DashBoard</h1>
                    <p>WelcomeBack whats happening today</p>
                </div>
            </div>

            {/* search element*/}
            <div className='flex-1 max-w-md mx-8'>
                <div className='relative'>
                    <p className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400'>s</p>
                    <input type="#" className='w-full pl-10 pr-4 py-2.5 bg-slate-200/80
                     dark:bg-slate-800 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                     <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-800 
                     dark:hover:text-slate-300'>Search</button>
                </div>
            </div>
            <div className='flex items-center space-x-3'>
                <div className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-br  from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all'>
                    <span>New</span>
                </div>

                <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'>
                    <span>Dark</span>
                </button>
            </div>
        </div>

       
    </div>
  )
}

export default Header