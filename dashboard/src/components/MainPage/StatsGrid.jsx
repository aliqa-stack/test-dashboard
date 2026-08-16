import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaRupiahSign } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import { FaCoins } from "react-icons/fa";

const stats = [
  {
    title: "Total Revenue",
    value: "Rp.100.000.000",
    change: "+12%",
    trend: "up",
    icon: FaCoins,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400"
  },
   {
    title: "Total Revenue",
    value: "Rp.20.000.000",
    change: "-2%",
    trend: "down",
    icon: FaCoins,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400"
  },
   {
    title: "Total Revenue",
    value: "Rp.100.000.000",
    change: "+12%",
    trend: "up",
    icon: FaCoins,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400"
  }
]

export const StatsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4'>
      {stats.map((stats, index) =>{

        const RpIcon = stats.icon;
        return( 
           <div key={index} className='bg-white/80  dark:bg-slate-800/80 backdrop-blue-xl rounded-xl p-5 border border-slate-200/50
          dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300 group overflow-hidden'>
        <div className='flex items-start justify-between gap-4'>
          <div className='flex-1'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2'>
              {stats.title}
            </p>
            <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>{stats.value}</p>

              <div className='flex items-center space-x-2 '>
                {/*<FaArrowRight className='w-4 h-4'/>*/}
                {stats.trend === "up" ? <FaArrowUp className='w-4 h-4 text-emerald-500'/> : <FaArrowDown className='text-red-500'/>}
                <span className={`text-sm font-semibold ${stats.trend === "up" ? "text-emerald-500" : 'text-red-500'}`}>{stats.change}</span>
                <span className='text-sm text-slate-500 dark:text-slate-400'>VS last</span>
              </div>
          </div>
           <div className={`flex-shrink-0 p-3 rounded-xl ${stats.bgColor} ${stats.textColor} flex justify-center items-center group-hover:scale-110 transition-all duration-200`}>
              <RpIcon className="w-4 h-4"/>
           </div>
        </div>
    <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
      <div className={`w-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`}></div>
    </div>
    </div>
    );
      })}
      
  </div>
  )
};

export default StatsGrid;