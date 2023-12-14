import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section className='text-white flex flex-col items-center'>
            <h2 className='text-3xl'>Sobre Mim</h2>
            <div className='flex flex-col items-center text-center m-4 gap-5 md:mx-16 lg:flex-row lg:justify-center'>
                <div className='flex flex-col gap-5 lg:w-3/6'>
                    <p>
                        Olá, sou o Kauan, um entusiasta apaixonado por tecnologia e programação web. Com uma sólida formação em desenvolvimento de software, transformo conceitos criativos em experiências digitais envolventes.
                    </p>
                    <p className='relative'>
                        Vamos criar algo extraordinário juntos!
                        {/* <Image
                    height={100}
                    width={50}
                    src='/rocket.svg'
                    alt='Alternative text for the image'
                    className='absolute top-5 right-0'
                    /> */}
                    </p>
                </div>

                <div className='relative my-10 flex items-center justify-center h-56 w-56 p-3 border-2 md:h-60 md:w-60  border-white rounded-full'>
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

        </section>
    )
}
