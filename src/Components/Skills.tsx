import Image from "next/legacy/image"
import React from 'react'

const icones = ['/icons/bootstrap.svg', '/icons/react.svg', '/icons/storybook.svg', '/icons/tailwind.svg', '/icons/typescript.svg', '/icons/html.svg', '/icons/js.svg', '/icons/nextjs.svg', '/icons/css-3.svg']

export default function Skills() {
  return (
    <section className='h-auto flex flex-col gap-5 text-white mt-10 text-center px-5'>
      <div className='flex flex-col gap-1 items-center mb-4'>
        <h2 className=' text-3xl '>Code Skills</h2>
        <span className='bg-blue-800 rounded-full h-0.5 w-2/4 ' />
      </div>
      <h3>Domínio em várias linguagens de programação essenciais, mantendo-me atualizado com as últimas tecnologias.</h3>
      <ul className='h-96 flex justify-center flex-wrap gap-5 overflow-hidden '>
        {icones.map((item) =>
          <li key={item} className='h-16 w-16  rounded-lg'>
            <Image
              height={50}
              width={50}
              src={item}
              alt='Alternative text for the image'
              layout='responsive'
              loading="lazy"
              sizes='(min-width: 640px) 30vw, 50vw'
              className='text-white'
            />
          </li>
        )}
      </ul>

    </section>
  )
}
