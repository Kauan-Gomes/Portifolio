'use client'
import Typed from 'typed.js';
import React, { useEffect } from 'react'

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
    <div className='h-[90vh] mt-10 flex 2xl: lg: md: sm:'>
      <div className='text-white flex flex-col items-center'>
        <h1 className='mx-20 h-40 text-4xl font-bold' id='typed-output'></h1>
        <div className='w-4/6 '>
          <p className='text-xl my-5'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
          <button className='border px-5 py-2 rounded-lg'>
            Curriculo
          </button>
        </div>
      </div>


      {/* <div className='w-3/6 text-start flex flex-col -mr-80 gap-10 z-10 text-white xl: lg: md: sm:   '>
        <h1 className='text-9xl text-Black font-bold xl:text-8xl'>Hello <br /> I'm Kauan Gomes</h1>
        <div className='w-4/6 '>
          <p className='text-xl my-5'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
          <button className='border px-5 py-2 rounded-lg'>
            Curriculo
          </button>
        </div>
      </div>
      <div className='w-4/12 p-10'>
        <Image
          height={100}
          width={100}
          src='/fotoPerfil.jpg'
          alt='Alternative text for the image'
          layout='responsive'
          sizes='(min-width: 640px) 30vw, 50vw'  // Ajuste o valor conforme necessário
          className='rounded-lg'
        />
      </div> */}

    </div>
  )
}
