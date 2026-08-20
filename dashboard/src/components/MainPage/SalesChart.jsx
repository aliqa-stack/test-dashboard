import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const SalesChart = () => {

    const data = [
        {product : "baju", value: 200},
        {product : "sepatu", value: 230},
        {product : "celana", value: 110},
        {product : "topi", value: 150}
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='bg-white dark:bg-gray-800/20'>
        <div className='p-3'>
            <h2 className='font-semibold text-xl text-black'>Sales chart</h2>
            <p className='font-medium text-lg text-gray-500 dark:text-gray-800'>Product</p>
        </div>

        <div className='flex items-center justify-center'>
            <h1 className='font-semibold text-black'>Revenue</h1>
        </div>
        <div className='h-full w-full flex p-1 items-center justify-center'>
            <PieChart width={300} height={300}>
                <Pie data={data}
                dataKey = "value"
                nameKey= "product"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="000fff"
                label>
                    {data.map((centry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}

                </Pie>
                <Tooltip/>
            </PieChart>

        </div>
    </div>
  )
}

export default SalesChart