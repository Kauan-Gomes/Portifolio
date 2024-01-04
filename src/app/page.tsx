import Header from '@/Components/Header'
import Home from '@/Components/Home'
import Portifolio from '@/Components/Projetos'
import About from '@/Components/About';
import Skills from '@/Components/Skills';
import Contato from '@/Components/Contato';
import Footer from '@/Components/Footer';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {gsap} from 'gsap'
import React, {useLayoutEffect } from 'react'



export default function HomePage() {
    

  return (
    <main className='bg-black/30 bubble-background '>
      <Header />
      <Home />
      {/* <About/>
      <Portifolio />
      <Skills/>
      <Contato/>
      <Footer/> */}
    </main>
  )
}
