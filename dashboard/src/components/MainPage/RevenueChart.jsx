import React from 'react'
import { Bar, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, ResponsiveContainer, BarChart, Tooltip } from 'recharts';

const RevenueChart = () => {
    const data =[
        { bulan:"jan", revenue: 42000, expenses: 30000},
        { bulan:"feb", revenue: 40000, expenses: 24000},
        { bulan:"mar", revenue: 42000, expenses: 20000},
        { bulan:"apr", revenue: 42000, expenses: 20000},
        { bulan:"mei", revenue: 42000, expenses: 20000},
        { bulan:"jun", revenue: 42000, expenses: 20000},
        { bulan:"jul", revenue: 42000, expenses: 20000},
        { bulan:"agu", revenue: 42000, expenses: 20000},
        { bulan:"sep", revenue: 43000, expenses: 20000},
        { bulan:"okt", revenue: 43000, expenses: 20000},
        { bulan:"nov", revenue: 43000, expenses: 20000},
        { bulan:"des", revenue: 43000, expenses: 20000},
    ]
  return (
    <div className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl p-3 rounded-blur-2xl border border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center justify-between mb-6'>
            <div>
                <h1  className='text-xl font-bold text-slate-800 dark:text-white'>Revenue</h1>
                 <p className='text-sm font-bold text-slate-500 dark:text-white'>Monthly revenue</p>
            </div>
            <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'></div>
                    <div className='text-sm text-slate-600 dark:text-slate-400'>
                        <span>Revenue</span>
                    </div>
                </div>
                <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full'></div>
                    <div className='text-sm text-slate-600 dark:text-slate-400'>
                        <span>Expenses</span>
                    </div>
                </div>

            </div>

        </div>
        <div className='h-80 w-full'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart 
            width={400}
            height={600}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
    <CartesianGrid strokeDasharray="3 3"/>
    <XAxis dataKey="bulan"/>
    <YAxis/>
    <Tooltip/>
    <Legend/>
    <Bar dataKey="revenue" fill="#8884d8"/>
    <Bar dataKey="expenses" fill="#82ca9d"/>

    </BarChart>
            </ResponsiveContainer>
        </div>
    </div>

  )
}

export default RevenueChart