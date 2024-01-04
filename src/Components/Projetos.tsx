'use client'
import gsap from "gsap";
import Image from "next/legacy/image";
import * as React from 'react';

function Card({ trabalho }: any) {
    return (
        <div className='bg-white h-80 w-full flex items-end relative rounded-lg border-4 border-black shadow-lg shadow-gray-400 '>
            <div className='absolute -top-20 h-64 w-full bg-transparent'>
                <Image
                    layout='fill'
                    alt='Alternative text for the image'
                    src='/pcSerennato1.png'
                />
            </div>
            <div className='text-black h-2/4 w-full text-center px-2 '>
                <h2 className=''>{trabalho}</h2>
                <p className='text-sm'>Este exemplo cria um gradiente radial com uma forma de elipse, atingindo o canto mais distante do elemento, centrado em</p>
                <button className='border py-1 px-2 rounded-xl my-2 hover:bg-black hover:text-white'>Ver mais</button>
            </div>
        </div>
    )
}


export default function Portifolio() {

    const Cards = ['Trabalho 1', 'Trabalho 2', 'Trabalho 3', 'Trabalho 4']

    return (
        <section className='flex flex-col items-center text-white h-auto gap-10 '>
            <div className='text-center'>
                <h2 className='text-3xl texto_alternativo'>Projetos</h2>
                <h3 className='text-md'>Exploração dos Trabalhos Recentes</h3>
            </div>
            <Carousel />
            <div className=' flex-col gap-10 md:flex-row md:flex-wrap md:items-center md:justify-center hidden'>
                {Cards.map((item) => <Card trabalho={item} key={item} />)}
            </div>
            <button className='border py-1 px-2 rounded-xl my-2 hover:bg-black hover:text-white'>Ver mais projetos</button>
        </section>

    )
}


function Carousel() {
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
            background: 'linear-gradient(to right, #fff, #fff)',
            duration: 0.3, // ajuste a duração conforme necessário
            ease: 'power2.inOut',
        })
    }

    return (
        <div className="relative h-[500px] w-8/12 bg-white flex flex-col justify-between overflow-hidden rounded-lg">
            <div className=" h-4/5 bg-green-700">
                <img
                    src='/images.jpg'
                    alt='Alternative text for the image'
                    className="w-full h-full object-cover "
                    style={{ objectPosition: 'center top' }}
                />
            </div>
            <div className="h-1/5 bg-white py-2 pl-5 text-black border-t-2">
                <h2 className="font-bold">Serenatto</h2>
                <div className="flex ">
                    <button
                        onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        className='relative h-8 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer hover'>
                        <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                        <div className=' flex justify-center items-center h-full w-36 z-10 rounded-lg gap-4 Selecionado'>
                            <div className='h-5 w-5'>
                                <Image
                                    height={10}
                                    width={10}
                                    src='/icons/github.svg'
                                    alt='Alternative text for the image'
                                    loading="lazy"
                                    sizes='(min-width: 640px) 30vw, 50vw'
                                    className='bg-transparent rounded-full'
                                />
                            </div>
                            <a className='' href="">Repositório</a>
                        </div>
                    </button>
                    <button
                        onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        className='relative h-8 w-auto flex gap-3 items-center p-[1px] font-bold rounded-lg cursor-pointer hover'>
                        <div className='absolute bubble-background2 h-full w-full left-0 rounded-lg z-0'></div>
                        <div className=' flex justify-center items-center h-full w-36 z-10 rounded-lg gap-4 Selecionado'>
                            <div className='h-5 w-5'>
                                <Image
                                    height={10}
                                    width={10}
                                    src='/icons/linkedin.svg'
                                    alt='Alternative text for the image'
                                    loading="lazy"
                                    sizes='(min-width: 640px) 30vw, 50vw'
                                    className='bg-transparent rounded-full'
                                />
                            </div>
                            <a className='' href="">Deploy</a>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}




