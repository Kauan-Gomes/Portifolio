import Image from 'next/image';
import * as React from 'react';

function Card() {
    return (
        <div className='bg-white h-72 w-64  rounded-lg'>
            <div className='relative h-4/6 text-black overflow-hidden rounded-t-lg'>
                <Image
                    height={50}
                    width={50}
                    src='/fotoPerfil.jpg'
                    alt='Alternative text for the image'
                    layout='responsive'
                    loading="lazy"
                    sizes='(min-width: 640px) 30vw, 50vw'
                    className='content object-cover '
                />
            </div>
            <div className='h-2/6 rounded-b-lg text-center bg-gray-100'>
                <h3 className='text-black'> Nome do Projeto</h3>
                <div className='flex items-center justify-center'>

                </div>
            </div>
        </div>
    )
}


export default function Portifolio() {

    const Cards = ['Trabalho 1', 'Trabalho 2', 'Trabalho 3', 'Trabalho 4']

    return (
        <div className='flex flex-col items-center my-10 text-white h-auto gap-5'>
            <h2 className='text-3xl '>Projetos</h2>
            <Card />
            <Card />

            {/* {Cards.map((item) => <Card/>)} */}

        </div>
    )
}
