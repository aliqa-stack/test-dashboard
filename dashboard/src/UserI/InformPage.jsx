import React from 'react'

const InformPage = () => {
    const Infor = [
        {head: "produk", total:100, test:"lorem ipsum"},
        {head: "brand", total:100, test:"lorem ipsum"},
        {head: "Vendor", total:100, test:"lorem ipsum"},
        {head: "produk", total:100, test:"lorem ipsum dolor s"},
    ]
  return (
    <div>
        <section className='flex lg:justify-center justify-start'>
          <article className="grid gap-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-300 lg:p-2">
            {Infor.map((data) => (
            <div key={data.head} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
            <div className="row-span-2 grid h-32 items-center">
                <div className=''>
                    <h2 className='font-bold text-md text-gray-600 font-inter'>{data.head}</h2>
                    <span className='font-semibold text-6xl font-[Roboto]'>{data.total}</span>
                    <p className='font-sm text-gray-500 font-mono'>{data.test}</p> 
                </div>
           </div>
            </div>
           
            ))}
         </article>
    
        </section>
    </div>
  )
}

export default InformPage