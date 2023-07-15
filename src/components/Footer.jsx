import React from 'react';
import { RiCheckboxBlankCircleFill, RiInstagramLine, RiFacebookLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";

const Footer = () => {
  return <footer className='bg-gray-700 p-8 xl:p-20 ' >
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8'>
         {/* LOGO */}
           <did className='w-1/6 '>
           <a href='#' className="text-2xl font-bold relative p-1 bg-gray-700 text-white">
            Power
            <span className='text-purple-500 text-5xl'>.</span>{" "} 
           </a>
           </did>
             {/* Social MEDIO */}
             <nav className='flex  items-center gap-4'>
             <a href='#' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
                {""}<RiInstagramLine />{""}
                </a>
                <a href='#' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
                {""}<RiFacebookLine />{""}
                </a>
                <a href='#' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
                {""}<RiTwitterLine />{""}
                </a>
                <a href='#' className=' block  text-white p-4 bg-purple-500 rounded-full hover:bg-purple-400 transition-colors'>
                {""}<RiGithubLine />{""}
                </a>
          </nav>
        </div>
        <div className='mt-8'>
          <h3 className='text-lg font-bold text-white text-center md:text-left'>
            Company
          </h3>
          <nav className='mt-4 flex flex-col md:flex-row items-center text-[19px] justify-between gap-4'>
            <a href='#' className='text-gray-200 mt-4 hover:text-white transition-colors'>About Us</a>
            <a href='#' className='text-gray-300 mt-4  hover:text-white transition-colors'>Press</a>
            <a href='#' className='text-gray-300 mt-4  hover:text-white transition-colors'>Investores</a>
            <a href='#' className='text-gray-300 mt-4  hover:text-white transition-colors'>Events</a>
            <a href='#' className='text-gray-300 mt-4  hover:text-white transition-colors'>terms of use</a>
            <a href='#' className='text-gray-300 mt-4  hover:text-white transition-colors'>Privacy policy</a>
            <button type='button' className='font-semibold py-2 px-6 bg-purple-500 text-white rounded-xl  hover:bg-purple-400 transition-colors'>
              Contact Us 
            </button>
          </nav>
        </div>
        <div className='mt-20'>
            <p className='text-gray-300 text-center'> @ jodetredev 2022 - All Rights Reserved</p>    
        </div> 
  </footer>
  
}

export default Footer;