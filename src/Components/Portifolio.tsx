const Cards = ['Trabalho 1', 'Trabalho 2', 'Trabalho 3', 'Trabalho 4']
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Portifolio() {
    return (
        <div className='mt-20 flex flex-col justify-center items-center text-white h-screen '>
            <h2 className='text-xl'>Portifolio</h2>
            {Cards.map((item) => 
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        src="/fotoPerfil.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>)}
            
        </div>
    )
}
