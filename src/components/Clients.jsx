import React from 'react'

export const Clients = () => {
  return (
    <div className='bg-gray-100 p-1 mt-20 xl:mt-0 flex flex-col text-center items-center'>
        <h1 className='text-[25px] pt-1 font-medium text-gray-800'>Truested by greatest companies</h1>
        <div className='flex flex-col md:flex-row items-center flex-wrap  gap-15'>
            <img src='google2.png' className='w-40'/>
            <img src='airbnb.png' className='w-40'/>
            <img src='amazon.png' className='w-40'/>
            <img src='shopify.png' className='w-40'/>
            <img src='netflix.png' className='w-40'/>
            
        </div>
    </div>
  )
}
