import React from 'react'
import Card from './Card'

const Category = ({title,detail}) => {
    
    if (!detail) return

  return (
    <div className='overflow-x-scroll'>
          <h1 className='text-xl md:text-2xl lg:text-4xl pb-4 font-semibold'>{title}</h1>

          <div className="flex flex-row space-x-10 overflow-x-scroll scroll-smooth overflow-y-hidden">
               {
                 detail.map(item =><Card item={item} />)
               }    
                   
                   
          </div>

    </div>
  )
}

export default Category