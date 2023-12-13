'use client'
import Typed from 'typed.js';
import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'next/image';


export default function Home() {

  useEffect(() => {
    // Configuração do Typed.js
    const options = {
      strings: ["Hello, I'm Kauan Gomes", "I'm Web Developer"],
      typeSpeed: 150,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: false,
    };

    // Inicialização do Typed.js
    const typed = new Typed('#typed-output', options);

    // Limpar a instância do Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div
    className='
    h-auto my-10  flex flex-col items-center 
    sm:flex-row sm:h-[35vh] sm:items-center sm:justify-center sm:p-5 
    md:md:h-[35vh] md:mb-40 md:items-end
    lg:h-[40vh] lg:text-center
    xl:
    '>
      <div className='
      text-white flex flex-col items-center 
      sm:w-3/6 
      md:w-4/6
      
      '>
        <h1 className='
        h-20 text-4xl text-center font-bold mx-2 py-0 w-full
        sm:h-10
        md:text-2xl 
        lg:text-3xl
        ' 
        id='typed-output'></h1>
        <div className='w-4/6 flex flex-col gap-5 lg:justify-center items-center'>
          <p className='text-xl text-center my-5 sm:my-0 md:text-base'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
          <div className='flex gap-5'>
            <button className='relative font-bold px-5 py-2 rounded-lg'>
              <a href="">Linkedin</a>
              <span className='absolute inset-0 border-gradient-to-r pointer-events-none'></span>
            </button>
            <button className='relative text-white font-bold py-2 px-4 rounded-lg'>
              <a href="">Github</a>
              <span className='absolute inset-0 border-gradient-to-r pointer-events-none'></span>
            </button>
          </div>
        </div>
      </div>
      <div className='relative flex items-center justify-center h-56 w-56 p-3 border-2 md:h-60 md:w-60  border-white rounded-full mt-20 '>
          <div className='bg-red-300 h-full w-full rounded-full overflow-hidden'>
            <Image
              height={100}
              width={100}
              src='/fotoPerfil.jpg'
              alt='Alternative text for the image'
              layout='responsive'
              loading="lazy"
              sizes='(min-width: 640px) 30vw, 50vw' 
              className='content object-cover'
            />
          </div>
        </div>
    </div>
  )
}
