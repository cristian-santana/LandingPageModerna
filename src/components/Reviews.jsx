import React from 'react';
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className='p-8 flex flex-col gap-8 bg-gray-100'>
        <h1 className='text-[40px] text-center font-black'>Let`s heart what they says</h1>
        <div className='flex justify-center'>
            <span className='text-5xl text-blue-500'>
            <RiDoubleQuotesL />
            </span>
        <p className='max-w-2xl text-center text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur totam provident earum vero, perspiciatis neque omnis blanditiis quasi vitae tempore iste sit deleniti, nisi fuga repellat dolores, laboriosam nobis!
        </p>
        <span className='text-5xl text-blue-500' ><RiDoubleQuotesR /></span>
        </div>
        <div className='flex flex-col item-center justify-center gap-8'>
         <div className='flex  items-center justify-center gap-4 md:gap-12'>

         <img src='https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg?' className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full '/>
 
       <img src='https://img.freepik.com/foto-gratis/retrato-joven-rubio-mujer_273609-12060.jpg' className='w-10 h-10 md:w-16 mg:h-16 object-cover rounded-full 0 -ml-3'/>

       <img src='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg' className='w-12 h-12 md:w-20 md:h-20 obje8ct-cover rounded-full ring-4 ring-blue-500 p-1 bg-white  -ml-3'/>

      <img src='https://img.freepik.com/foto-gratis/mujer-tranquila-cabello-tenido-pie-manos-cruzadas-sonrisa-sincera-encantadora-demostrando-sus-dientes-perfectos-posando_273609-7675.jpg?w=740&t=st=1683391254~exp=1683391854~hmac=28610aeaa78ddbe277116e21d569e19f0f5ced361e83765ced7fa39428c4f379' className='w-10 h-10 md:w-16 mg:h-16 object-cover rounded-full -ml-3'/>

      <img src='https://img.freepik.com/foto-gratis/joven-haciendo-gesto-italiano-camiseta-negra-mirando-confiado-vista-frontal_176474-65063.jpg' className='w-8 h-8 md:w-14 md:h-14 object-cover rounded-full -ml-3'/>
         </div>
          <div>
            <h3 className='text-center text-[24px] font-bold'>Ricky Aprilia</h3>
            <h5 className='text-center text-[20px] text-gray-500'>Founder of Varibo</h5>
          </div>
       </div>
      
    </div>
    
  )
}

export default Reviews;