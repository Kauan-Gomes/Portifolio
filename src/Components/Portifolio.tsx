import Image from 'next/image';
import * as React from 'react';



function Card({ trabalho }: any) {
    return (
        <div className='bg-white h-80 w-60 flex items-end relative rounded-lg border-4 border-black shadow-lg shadow-gray-400 '>
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

            {/* <div className='relative h-4/6 text-black overflow-hidden rounded-t-lg'>
                <Image
                    height={150}
                    width={150}
                    src='/images.jpg'
                    alt='Alternative text for the image'
                    objectFit="contain"
                    className='h-full w-full '
                />
            </div> */}
            {/* <div className='h-2/6 rounded-b-lg text-center bg-gray-100'>
                <h3 className='text-black font-semibold items-start'> Nome do Projeto</h3>
                <div className='flex items-center justify-center'>
                </div>
            </div> */}
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
            <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:items-center md:justify-center'> 
                {Cards.map((item) => <Card trabalho={item} key={item} />)}
            </div>
            <button className='border py-1 px-2 rounded-xl my-2 hover:bg-black hover:text-white'>Ver mais projetos</button>
        </section>

    )
}
