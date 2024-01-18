'use client'
import Image from "next/legacy/image"
import React, { useEffect, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import Title from "./Title"


export default function About() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".sobre", {
            x: 0,
            opacity: 1,
            duration: 5,
            rotate: "0deg",
            scrollTrigger: {
                trigger: ".sobre",
                markers: false,
                start: "top 330px",
                end: "bottom 900px",
                scrub: 5,
            }
        })

        return () => {
            gsap.killTweensOf(".sobre")
        }
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".sobre-lg", {
            x: 0,
            opacity: 1,
            duration: 10,
            rotate: "0deg",
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".sobre-lg",
                markers: false,
                start: "top 330px",
                end: "bottom 580px",
                scrub: 5,
            }
        })

        return () => {
            gsap.killTweensOf(".sobre-lg")
        }
    }, [])

    return (
        <>
            <section className='text-white flex flex-col items-center -translate-x-[800px] opacity-0 sobre md:hidden'>
                <div>
                    <Title
                        text='Sobre mim'
                    />
                </div>
                <div className='flex flex-col items-center text-center m-4 gap-5 md:mx-16 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col gap-5 lg:w-3/6'>
                        <p>
                            Olá, sou o Kauan, um entusiasta apaixonado por tecnologia e programação web. <br /> Com uma sólida formação em desenvolvimento de software, transformo conceitos criativos em experiências digitais envolventes.
                        </p>
                        <p className='relative'>
                            Vamos criar algo extraordinário juntos!
                        </p>
                    </div>

                    <div className='h-64 w-64 my-10 flex items-center justify-center bubble-background2 rounded-full'>
                        <div className=''>
                            <img
                                src="/fotoPerfil.jpg"
                                className='content object-cover h-60 w-60 rounded-full'
                                alt="Alternative text for the image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-white flex-col items-center -translate-x-[800px] opacity-0 sobre-lg hidden md:flex'>
                <div>
                <Title
                        text='Sobre mim'
                    />                
                </div>
                <div className='flex flex-col items-center text-center m-4 gap-5 md:mx-16 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col gap-5 lg:w-3/6'>
                        <p>
                            Olá, sou o Kauan, um entusiasta apaixonado por tecnologia e programação web. Com uma sólida formação em desenvolvimento de software, transformo conceitos criativos em experiências digitais envolventes.
                        </p>
                        <p className='relative'>
                            Vamos criar algo extraordinário juntos!
                        </p>
                    </div>

                    <div className='relative my-10 flex items-center justify-center h-56 w-56 p-1 md:h-60 md:w-60 bubble-background2 rounded-full'>
                        <div className='h-full w-full rounded-full overflow-hidden'>
                            <img
                                src="/fotoPerfil.jpg"
                                className='content object-cover'
                                alt="Alternative text for the image" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
