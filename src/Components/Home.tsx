'use client'
import Typed from 'typed.js';
import React, { useEffect, useLayoutEffect } from 'react'
import Image from 'next/image';
import { gsap } from 'gsap'



export default function Home() {

  useLayoutEffect(() => {
    gsap.fromTo(".home",
    {
      x:0,
      y:-70,
      opacity: 0,
      duration: 1,
      rotate: "0deg",
    },
    {
      x: 0,
      y:0,
      opacity: 1,
      duration: 1,
      rotate: "0deg",
    })

    return () => {
      gsap.killTweensOf(".home")
    }
  }, [])

  useEffect(() => {
    // Configuração do Typed.js
    const options = {
      strings: ["Hello, I'm <span class='gradient-text'>Kauan Gomes</span>", "I'm <span class='gradient-text'>Web Developer</span>"],
      typeSpeed: 150,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      showCursor: false,
      contentType: 'html',
    };

    // Inicialização do Typed.js
    const typed = new Typed('.titulo', options);

    // Limpar a instância do Typed.js quando o componente for desmontado
    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <>
      <div className=' text-white h-screen flex justify-center px-7 home opacity-0'>
        <div className='flex flex-col justify-center gap-7'>
          <h1 className='titulo text-5xl text-center font-semibold h-28'></h1>
          <div className=' flex flex-col justify-center items-center gap-5 text-center'>
            <p className=''>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
            <div className='flex gap-5'>
              <button className='relative h-14 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer'>
                <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                <div className=' flex justify-center items-center h-full w-36 bg-black z-10 rounded-lg gap-4'>
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
                </div>

              </button>
              <button className='relative h-14 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer'>
                <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                <div className=' flex justify-center items-center h-full w-36 bg-black z-10 rounded-lg gap-4'>
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
                </div>

              </button>
            </div>
          </div>
        </div>

      </div>

    

    </>
  )
}
