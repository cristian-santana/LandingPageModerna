import React from 'react'

export const Works = () => {
  return (
    <div className='p-8 xl:p-10'>
        <did className='mb-8'>
            <h1 className='text-[30px] font-black'>We create world-class digital products</h1>
            <p className='text-lg text-gray-500 mb-6'>
                By information about design the word to best instructors, heatc
                helping by information
            </p>
        </did>
        {/* WORKS */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
              <img src='work1.png' className='w-full h-[500px] object-cover rounded-3xl'/>
              <p className='text-gray-500'>App design - june 20, 2022</p>
              <h3 className='text-1xl font-bold'>App Redesingn</h3>
              <span className='text-gray-500'>By information about design the world to the best instructors, heatc
            helping By information about design the world.
            </span>
            </div> 

               <div className='grid gid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-1'>
                   <img src='work2.png' className='w-full object-cover  rounded-3xl'/>
                   <p className='text-gray-500'>App design - june 20, 2022</p>
                   <h3 className='text-[17px] font-bold'>Redesign channel website landng page</h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src='work3.png' className='w-full object-cover rounded-3xl'/>
                   <p className='text-gray-500'>App design - june 20, 2022</p>
                   <h3 className='text-[17px]  font-bold'>New Locator App For a New Company</h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src='work4.png' className='w-full object-cover rounded-3xl'/>
                   <p className='text-gray-500'>App design - june 20, 2022</p>
                   <h3 className='text-[17px]  font-bold'>Rental Rooms Web App Platform</h3>
                 </div>

                 <div className='flex flex-col gap-1'>
                   <img src='work5.png' className='w-full  object-cover rounded-3xl'/>
                   <p className='text-gray-500'>App design - june 20, 2022</p>
                   <h3 className='text-[17px]  font-bold'>Calendar App for Big SASS Company</h3>
                 </div>
               </div>
        </div>
    </div>
  )
}

export default Works;