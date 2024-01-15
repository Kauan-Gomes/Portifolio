'use client'
import Image from "next/legacy/image"
import React, { useEffect, useLayoutEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'


export default function About() {
    useLayoutEffect(() => {
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
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".sobre")
        }
    }, [])

    useLayoutEffect(() => {
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
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".sobre-lg")
        }
    }, [])

    useEffect(() => {
        const colors = ['#e61aba', '#189ddb', '#1ae64d', '#db1818'];
        const durationPerColor = 0.1;

        const gradientElement = document.querySelector(".sobre .borda-inferior");

        let currentIndex = 0;

        const animateGradient = () => {
            gsap.to(gradientElement, {
                background: `linear-gradient(to right, ${colors[currentIndex]}, ${colors[currentIndex + 1]})`,
                duration: durationPerColor,
                ease: 'none',
                onComplete: () => {
                    currentIndex = (currentIndex + 1) % (colors.length - 1);
                    animateGradient();
                },
            });
        };

        animateGradient();

        return () => {
            gsap.killTweensOf(gradientElement);
        };
    }, []);


    useEffect(() => {
        const colors = ['#1ae64d', '#189ddb', '#1ae64d', '#189ddb'];
        const durationPerColor = 2;

        const gradientElement = document.querySelector(".sobre-lg .borda-inferior");

        let currentIndex = 0;

        const animateGradient = () => {
            gsap.to(gradientElement, {
                background: `linear-gradient(to right, ${colors[currentIndex]}, ${colors[currentIndex + 1]})`,
                duration: durationPerColor,
                ease: 'none',
                onComplete: () => {
                    currentIndex = (currentIndex + 1) % (colors.length - 1);
                    animateGradient();
                },
            });
        };

        animateGradient();

        return () => {
            gsap.killTweensOf(gradientElement);
        };
    }, []);

    return (
        <>
            <section className='text-white flex flex-col items-center -translate-x-[800px] opacity-0 sobre md:hidden'>
                <div>
                    <h2 className='text-3xl texto_alternativo relative'>Sobre Mim</h2>
                    <span className="w-full h-0.5 block mt-2 mx-auto rounded-full borda-inferior" />
                </div>
                <div className='flex flex-col items-center text-center m-4 px-10  gap-5 md:mx-16 lg:flex-row lg:justify-center'>
                    <div className='flex flex-col gap-5 lg:w-3/6'>
                        <p>
                            Olá, sou o Kauan, um entusiasta apaixonado por tecnologia e programação web. <br /> Com uma sólida formação em desenvolvimento de software, transformo conceitos criativos em experiências digitais envolventes.
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

                    <div className='relative my-10 flex items-center justify-center h-48 w-48 p-1 md:h-60 md:w-60 bubble-background2 rounded-full'>
                        <div className='h-full w-full rounded-full overflow-hidden'>
                            <img
                                src="/fotoPerfil.jpg"
                                className='content object-cover'
                                alt="Alternative text for the image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='text-white flex-col items-center -translate-x-[800px] opacity-0 sobre-lg hidden md:flex'>
                <div>
                    <h2 className='text-3xl texto_alternativo relative'>Sobre Mim</h2>
                    <span className="w-full h-0.5 block mt-2 mx-auto rounded-full borda-inferior" />
                </div>
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
