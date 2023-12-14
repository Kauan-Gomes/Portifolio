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
    h-auto flex flex-col items-center overflow-hidden my-10
    sm:flex-row sm:items-center sm:justify-center sm:p-5 
    md:md:
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
            <button className='relative border font-bold px-5 py-2 rounded-lg'>
              <a href="">Linkedin</a>
            </button>
            <button className='relative text-white border font-bold py-2 px-4 rounded-lg'>
              <a href="">Github</a>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
