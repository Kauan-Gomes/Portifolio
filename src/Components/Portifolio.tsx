import * as React from 'react';

function Card(){
    return(
        <div className='bg-black h-96 w-96 rounded-lg'> 
            
        </div>
    )
} 


export default function Portifolio() {

    const Cards = ['Trabalho 1', 'Trabalho 2', 'Trabalho 3', 'Trabalho 4']

    return (
        <div className='flex flex-col items-center text-white h-[80vh] gap-5'>
            <h2 className='text-3xl'>Portifolio</h2>
            {/* {Cards.map((item) => <Card/>)} */}
        
        </div>
    )
}
