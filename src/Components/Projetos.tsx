'use client'

import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import * as React from 'react';


export default function Portifolio() {
    React.useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".projetos", {
            x: 0,
            opacity: 1,
            duration: 5,
            rotate: "0deg",
            scrollTrigger: {
                trigger: ".projetos",
                markers: true,
                start: "top 230px",
                end: 'bottom 700px',
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".projetos")
        }
    }, [])


    return (
        <section className='flex flex-col items-center text-white h-auto gap-10 projetos -translate-x-[800px] opacity-0'>
            <div className='text-center'>
                <h2 className='text-3xl texto_alternativo'>Projetos</h2>
                <h3 className='text-md'>Exploração dos Trabalhos Recentes</h3>
            </div>
            <Carousel />
            <button className='border py-1 px-2 rounded-xl my-2 hover:bg-black hover:text-white'>Ver mais projetos</button>
        </section>

    )
}

const projetos = [
    {
        src: '/images.jpg',
        alt: 'Alternative text for the image',
        title: 'serennato'
    },
    {
        src: '/images2.jpg',
        alt: 'Alternative text for the image',
        title: 'portifolio'
    },
    {
        src: '/fotoPerfil.jpg',
        alt: 'Alternative text for the image',
        title: 'portifolio'
    },
]


function Carousel() {
    const HandleMouseEnter = (e: any) => {
        gsap.to(e.querySelector('.Selecionado'), {
            background: 'linear-gradient(to right, #3b83e2, #24b42b)',
            duration: 0.5, // ajuste a duração conforme necessário
            ease: 'power2.inOut',
        });
    }

    const handleMouseLeave = (e: any) => {
        gsap.to(e.querySelector('.Selecionado'), {
            background: 'linear-gradient(to right, #000000, #000000)',
            duration: 0.3, // ajuste a duração conforme necessário
            ease: 'power2.inOut',
        })
    }

    const [index, setIndex] = React.useState(0)

    const handleMouseOnclickLeft = (e: any) => {
        index == 0 ? setIndex(projetos.length - 1) : setIndex(index - 1)

        gsap.fromTo('.carrosel',
            {
                x: -20,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1
            })
    }

    const handleMouseOnclickRight = (e: any) => {
        index == projetos.length - 1 ? setIndex(0) : setIndex(index + 1)

        gsap.fromTo('.carrosel',
            {
                x: 20,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1
            })

    }

    return (
        <section className="flex items-center justify-evenly gap-9">
            <button
                onClick={(e) => handleMouseOnclickLeft(e)}
                className=" h-16 w-16 flex items-center justify-center rounded-xl border">
                <img src="/icons/arrow.svg" alt="" className="h-10 " />
            </button>

            <div className="relative h-[70vh] w-10/12 bg-white flex flex-col justify-between rounded-lg carrosel">
                <div className=" h-4/5 rounded-full">
                    <img
                        src={projetos[index].src}
                        alt='Alternative text for the image'
                        className="w-full h-full object-cover rounded-lg"
                        style={{ objectPosition: 'center top' }}
                    />
                </div>
                <div className="h-1/5 bg-white py-2 px-5 text-black border-t-2 flex justify-between rounded-b-lg">
                    <h2 className="font-bold">{projetos[index].title}</h2>
                    <div className="flex gap-3 items-end">
                        <button
                            onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                            className='relative h-8 w-auto flex gap-3 items-center bg-black text-white font-semibold rounded-lg cursor-pointer hover'>
                            <div className=' flex justify-center items-center h-full w-36 z-10 rounded-lg gap-4 Selecionado'>
                                <div className='h-5 w-5'>
                                    <img src="/icons/github.svg" alt="Alternative text for the image" />
                                </div>
                                <a className='' href="">Repositório</a>
                            </div>
                        </button>
                        <button
                            onMouseEnter={(e) => HandleMouseEnter(e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                            className='relative h-8 w-auto flex gap-3 items-center bg-black text-white font-semibold rounded-lg cursor-pointer hover'>
                            <div className=' flex justify-center items-center h-full w-36 z-10 rounded-lg gap-4 Selecionado'>
                                <div className='h-5 w-5'>
                                    <img src="/icons/linkedin.svg" alt="Alternative text for the image" />
                                </div>
                                <a className='' href="">Deploy</a>
                            </div>
                        </button>
                    </div>
                </div>
            </div >
            <button
                onClick={(e) => handleMouseOnclickRight(e)}
                className="h-16 w-16 flex items-center justify-center rounded-xl rotate-180 border ">
                <img src="/icons/arrow.svg" alt="" className="h-10 " />
            </button>
        </section>

    )
}




