'use client'
import Image from 'next/image'
import React, { useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'


export default function About() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".sobre", {
            x: 0,
            opacity: 1,
            duration: 1,
            rotate: "0deg",
            scrollTrigger: {
                trigger: ".sobre",
                markers: true,
                start: "top 330px",
                end: "bottom 500px",
                scrub:true,
            }
        })

        return () => {
            gsap.killTweensOf(".sobre")
        }
    }, [])


    return (
        <section className='text-white flex flex-col items-center -translate-x-[800px] opacity-0  sobre'>
            <h2 className='text-3xl texto_alternativo'>Sobre Mim</h2>
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
