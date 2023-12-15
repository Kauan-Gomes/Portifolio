'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'





export default function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    function sendEmail(e: any) {
        e.preventDefault()

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_itb1asm', "template_oa272oc", templateParams, "RFiTxvoNjrneUTaF-")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)

                setName('')
                setEmail('')
                setMessage('')
            }, (error) => {
                console.log("Erro: ", error)
            })

    }

    return (
        <section className='text-white h-screen flex flex-col gap-10 px-10 text-center items-center'>
            <div>
                <h2 className='text-3xl my-4'>Vamos  <span className='text-purple-500'>Conversar!</span></h2>
                <h3>Estou ansioso para ouvir de você. Deixe-me saber como posso ajudar.</h3>
            </div>
            <form className='flex flex-col gap-10 text-black placeholder:text-black ' onSubmit={sendEmail}>
                <div className=' relative flex flex-col items-start'>
                    <label className='text-white absolute bottom-2' htmlFor="name">Nome: </label>
                    <input
                        id='name'
                        className='text-white bg-transparent pl-14 py-2 border-b outline-none'
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className=' relative flex flex-col items-start'>
                    <label className='text-white absolute bottom-2' htmlFor="email">Email:</label>
                    <input
                        id='email'
                        className='text-white bg-transparent pl-14 py-2 border-b  outline-none'
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className=' relative flex flex-col items-start'>
                    <label className='text-white absolute -top-6' htmlFor="message">Mensagem:</label>
                    <textarea
                        id='message'
                        className='text-white bg-transparent w-full px-2 py-2 border text-left outline-none'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <button type='submit' className='border text-white rounded-lg'>Enviar</button>
            </form>
        </section>
    )
}
