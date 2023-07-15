import React from 'react';
import { RiCheckboxBlankCircleFill, RiPlayFill, RiStarFill, RiCheckboxBlankLine } from "react-icons/ri";


const Hero = () => {
  return <section className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8'>
    {/* Information */}
    <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-18'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-5xl xl:text-7xl font-bold xl:leading-[7rem]'>Web Design Impactful Digital{" "} 
        <span className='text-blue-500 py-[11] px-6   border-8 border-blue-500 relative inline-block mt-3'>
          Products
         <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-3 -top-4 bg-blue-500 ring-8 ring-blue-500 rounded-full'/>
         <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-3 -top-4 bg-blue-500 ring-8 ring-blue-500 rounded-full'/>
         <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-4 -bottom-3 bg-blue-500 ring-8 ring-blue-500 rounded-full'/>
         <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-4 -bottom-3 bg-blue-500 ring-8 ring-blue-500 rounded-full'/>
         </span></h1>
        <p className='text-gray-500  text-2xl leading-[2rem]'>Help find solutions with intitutive and accordance with clint busines goals. We provide a high-quality services.</p>
        <div className='flex flex-col md:flex-row items-center  gap-3'>
          <button className='w-full xl:w-auto bg-blue-500 text-white py-2 px-8 rounded-xl text-xl'>Contact Us</button>
          <button className='w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl'> <RiPlayFill className='bg-blue-100 text-blue-500 p-4 rounded-full box-content'/>Watch our <br /> introduction video</button>
        </div>
      </div>
    </div>
    {/* Imagen */}
    <div className='md:col-span-3 flex items-center justify-center  relative p-8'>
      {/* conten imagen*/}
      <div>
         <div><img src='hero.png' className='h-[250px] w-[250px] md:w-[350px]  md:h-[350px]  object-cover xl-mt-28' />
            <div className='relative bg-white shadow-xl rouded-lg  p-4 flex flex-col justify-center gap-2 max-w-[250px] mx-auto -mt-7'>
                
              <div className='flex items-center'>

              <img src='https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg?' className='w-9 h-9 object-cover rounded-full ring-2 ring-gray-300'/>

              <img src='https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg' className='w-9 h-9 object-cover rounded-full ring-2 ring-gray-300 -ml-3'/>

              <img src='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg' className='w-9 h-9 object-cover rounded-full ring-2 ring-gray-300 -ml-3'/>

              <img src='https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg?w=740&t=st=1683391254~exp=1683391854~hmac=28610aeaa78ddbe277116e21d569e19f0f5ced361e83765ced7fa39428c4f379' className='w-9 h-9 object-cover rounded-full ring-2 ring-gray-300-ml-3'/>

              <img src='https://img.freepik.com/foto-gratis/joven-haciendo-gesto-italiano-camiseta-negra-mirando-confiado-vista-frontal_176474-65063.jpg' className='w-9 h-9 object-cover rounded-full ring-2 ring-gray-300 -ml-3'/>
              
              </div>
              <h2 className='text-lg font-bold traking-[1px] text-gray-800'>120 + Employees</h2>
              <div className='flex items-center gap-2 text-[16px] text-gray-700'>
                <RiStarFill className='text-blue-500' />5.0 (3.1k Reviews)
                </div>
            
                <div className='absolute -right-11 -bottom-11 -z-10'>
                <div className='relave'>
                    <RiCheckboxBlankCircleFill className=' text-blue-500 text-7xl'/>
                    <div  className='absolute left-0 top-0 bg-white  w-9 h-9'></div>
                </div>
                </div>             
           </div>
         </div>
      </div>

      {/* CIRCLE */}
         <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[250px] h-[250px] md:w-[280px] md:h-[280px] 
              bg-white border-[10px] border-blue-500 rounded-full -z-10'>
        </div>
        {/* LOGOS */}
        <img src='figma.png' className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] right-[20%] xl:right-[12%]'/>

        <img src='adobeXd.png' className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full border-l-8 border-gray-600 absolute xl:top-[5%] top-[5%] left-[20%] xl:left-[10%]'/>

        <img src='sketch.png' className='md:w-14 md:h-14 w-11 h-11 objet-cover rounded-full  absolute bottom-[20%] left-[5%] xl:left-[3%] -rotate-12'/>
    </div>
  </section>
  
}

export default Hero;