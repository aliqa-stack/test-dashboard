import React from 'react'

const GridSection = () => {
  return (
    <div>

        <section className="grid grid-cols-6 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-4">1</div>
            <div className="col-span-4 row-span-2 col-start-3">2</div>
            <div className="col-span-2 row-span-2 col-start-3 row-start-3">4</div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-3">5</div>
        </section>
    
    </div>
  )
}

export default GridSection