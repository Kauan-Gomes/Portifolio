'use client'
import Typed from 'typed.js';
import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'next/image';


export default function Home() {

  useEffect(() => {
    // Configuração do Typed.js
    const options = {
      strings: ["Hello, I'm Kauan Gomes", "I'm <span class='text-purple-700'>Web Developer</span>"],
      typeSpeed: 150,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: false,
      contentType: 'html',
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
        texto_alternativo
        h-20 text-4xl text-center font-bold mx-2 py-0 w-full
        sm:h-10
        md:text-2xl 
        lg:text-3xl
        '
          id='typed-output'></h1>
        <div className='w-4/6 flex flex-col gap-5 lg:justify-center items-center'>
          <p className='text-xl text-center my-5 sm:my-0 md:text-base'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
          <div className='flex gap-5'>
            <button className='relative h-14 w-auto px-5 flex gap-3 items-center py-2 border font-bold rounded-lg cursor-pointer'>
              <div className='h-7 w-7'>
                <Image
                  height={10}
                  width={10}
                  src='/icons/linkedin.svg'
                  alt='Alternative text for the image'
                  layout='responsive'
                  loading="lazy"
                  sizes='(min-width: 640px) 30vw, 50vw'
                  className='text-white '
                />
              </div>
              <a className='' href="">Linkedin</a>
            </button>
            <button className='relative h-14 w-auto px-5 flex gap-3 items-center py-2 border font-bold rounded-lg cursor-pointer'>
              <div className='h-7 w-7'>
                <Image
                  height={10}
                  width={10}
                  src='/icons/github.svg'
                  alt='Alternative text for the image'
                  layout='responsive'
                  loading="lazy"
                  sizes='(min-width: 640px) 30vw, 50vw'
                  className='text-white '
                />
              </div>
              <a className='' href="">Github</a>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
