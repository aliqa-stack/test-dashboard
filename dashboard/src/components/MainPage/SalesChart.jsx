import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useState, useEffect } from 'react';


const SalesChart = () => {

    const [countData, setData] = useState([]);
    const query = [
        {product : "baju", value: countData.length > 0 ? countData.filter(item => item.barang === "baju").length : 0},
        {product : "sepatu", value: countData.length > 0 ? countData.filter(item => item.barang === "sepatu").length : 0},
        {product : "celana", value: countData.length > 0 ? countData.filter(item => item.barang === "celana").length : 0},
        {product : "topi", value: countData.length > 0 ? countData.filter(item => item.barang === "topi").length : 0}
    ]

    useEffect(() => {
        const fetchData = async () => {
            const uri = "http://localhost:3000/product";
            try{
                const response = await fetch(uri, {
                    headers:{
                        Accept: "application/json",
                    },
                })

                if(!response.ok){
                    throw new Error("Failed to fetch product data");
                }

                const data = await response.json();
                setData(data);

            }catch(error){
                console.error("Error fetching product data:", error);
            }
        }
        fetchData();
    }, [])


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='bg-white dark:bg-gray-800/20'>
        <div className='p-3'>
            <h2 className='font-semibold text-xl text-black'>Product chart</h2>
            <p className='font-medium text-lg text-gray-500 dark:text-gray-800'>Product</p>
        </div>

        <div className='flex items-center justify-center'>
            <h1 className='font-semibold text-black'>Product Sales</h1>
        </div>
        <div className='h-full w-full flex p-1 items-center justify-center'>
        
            <PieChart width={300} height={300}>
                <Pie data={query}
                dataKey = "value"
                nameKey= "product"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#000fff"
                label>
                    {query.map((entry, index) => (
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