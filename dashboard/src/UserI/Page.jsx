import React from 'react'

const Page = () => {

    const type = [
        {id:0,name:"baju", harga:50000},           
        {id:1,name:"baju", harga:50000},
        {id:2,name:"baju", harga:50000},
        {id:3,name:"baju", harga:50000},
    ]

  return (
   <section className='flex items-center justify-center my-8'>
          
       <div className="grid lg:grid-cols-4 lg:grid-rows-3 lg:gap-4 gap-6">
        {type.map((index) =>(
                <div key={index.id}>
                    <div className="row-span-3">
                        <div className='bg-gray-500/80 w-62 h-70 rounded overflow-hidden  p-3 relative'>
                        <div className='flex h-[75%]  bg-gray-400 justify-center items-center relative'>
                        <div className='flex   items-center justify-center'>
                            {index.name}
                            </div>

                        </div>
                        <div className='mt-6  flex justify-between text-sm'>
                            <div>

                            {index.harga}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            
         
    </section>
  )
}

export default Page