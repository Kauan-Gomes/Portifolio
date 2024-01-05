'use client'
import Typed from 'typed.js';
import React, { useEffect, useLayoutEffect } from 'react'
import Image from "next/legacy/image";
import { gsap } from 'gsap'



export default function Home() {

  useEffect(() => {
    gsap.fromTo(".home",
      {
        x: 0,
        y: 270,
        opacity: 0,
        duration: 1,
        rotate: "0deg",
      },
      {
        x: 0,
        y: 0,
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
      strings: ["Hello, I'm <br> <span class='gradient-text'>Kauan Gomes</span>", "I'm <span class='gradient-text'>Web Developer</span>"],
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


  const HandleMouseEnter = (e: any) => {
    console.log(e)
    gsap.to(e.querySelector('.Selecionado'), {
      background: 'linear-gradient(to right, #09ff4626, #189ddb)',
      duration: 0.5, // ajuste a duração conforme necessário
      ease: 'power2.inOut',
    });
  }

  const handleMouseLeave = (e: any) => {
    gsap.to(e.querySelector('.Selecionado'), {
      background: 'linear-gradient(to right, #000, #000)',
      duration: 0.3, // ajuste a duração conforme necessário
      ease: 'power2.inOut',
    })
  }

  return (
    <>
      <div className=' text-white h-auto flex justify-center px-7 home opacity-0 '>
        <div className='flex flex-col justify-center md:w-8/12'>
          <h1 className='titulo text-5xl text-center font-semibold h-36 my-10'></h1>
          <div className='flex flex-col justify-center items-center gap-5 text-center'>
            <p className='text-bold lg:w-5/6 xl:w-3/6'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown</p>
            <div className='flex gap-5 my-10'>
              {/* <button
                onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                className='relative h-14 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer'>
                <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                <div className='flex justify-center items-center h-full w-36 bg-black z-10 rounded-lg gap-4 Selecionado'>
                  <div className='h-7 w-7'>
                    <img src="/icons/linkedin.svg" alt="Alternative text for the image" />
                  </div>
                  <a className='' href="">Linkedin</a>
                </div>

              </button>
              <button
                onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                className='relative h-14 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer hover'>
                <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                <div className=' flex justify-center items-center h-full w-36 bg-black z-10 rounded-lg gap-4 Selecionado'>
                  <div className='h-7 w-7'>
                  <img src="/icons/github.svg" alt="Alternative text for the image" />
                  </div>
                  <a className='' href="">Github</a>
                </div>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
