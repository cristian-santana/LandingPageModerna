import { Input } from 'postcss';
import React from 'react';
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20'>
     <div className='flex flex-col gap-4'> 
     <h1 className='text-[40px] font-bold'>How we can help you</h1> 
        <p className='text-[20px] text-gray-500'>
            follow our newalerrer. We will regulary update our latest project and availability.
        </p> 
        <form className='w-full'>
          <div className='relative'>
            <RiMailFill  className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl'/> 
            <input type='text' className='w-full bg-gray-300 py-4 pl-10 pr-36 rounded-xl outline-none' placeholder='Enter your email address '/>
            <button type='submit' className='absolute font-semibold py-2 px-6 bg-purple-500 text-white rounded-xl top-1/2 -translate-y-1/2 right-2 hover:bg-purple-400 transition-colors'>Suscribe</button>
          </div>
        </form>
     </div>
     {/* SERVICES */}
     <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <dib className='flex  flex-col gap-2'>
              <RiSmartphoneFill   className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl'/>
              <h3 className='text-[20px] font-bold'>UI/UX Design</h3>
              <p className='text-gray-500'>Sometimes Feartures require a short Description</p>
          </dib>
          <dib className='flex  flex-col gap-2'>
              <RiMacFill  className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl'/>
              <h3 className='text-[20px] font-bold'>Logo Branding</h3>
              <p className='text-gray-500'>Sometimes Feartures require a short Description</p>
          </dib>
          <dib className='flex  flex-col gap-2'>
              <RiSmartphoneFill  className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl'/>
              <h3 className='text-[20px] font-bold'>App Desing</h3>
              <p className='text-gray-500'>Sometimes Feartures require a short Description</p>
          </dib>
          <dib className='flex  flex-col gap-2'>
              <RiMacFill  className='text-4xl p-2 bg-gray-300 text-purple-500 box-content rounded-xl'/>
              <h3 className='text-[20px] font-bold'>Webiste Desi</h3>
              <p className='text-gray-500'>Sometimes Feartures require a short Description</p>
          </dib>
     </div>
    </div>
  )
}

export default Services; 