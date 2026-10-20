import React from 'react'
import Card from './Card'

const Category = ({title,detail}) => {
    
    if (!detail) return
    

  return (
    <div className='min-w-0 overflow-hidden px-4 sm:px-6 lg:px-10'>
          <h1 className='pb-3 text-lg font-bold tracking-tight text-white sm:pb-4 sm:text-2xl lg:text-3xl'>{title}</h1>

          <div className="flex flex-row gap-3 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-4 sm:gap-5 sm:pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
               {
                 detail.map(item =><Card key={item.id} item={item} />)
               }    
                   
                   
          </div>

    </div>
  )
}

export default Category