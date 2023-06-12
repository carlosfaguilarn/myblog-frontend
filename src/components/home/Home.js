import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppToolbar from './AppToolbar';
import Footer from './Footer';
import Search from './Search';
import Header from './Header';
import EntryCard from './EntryCard';
import { getAll } from '../../Services/Entry/Entry';
import { IndeterminateCheckBoxOutlined } from '@mui/icons-material';

const headerInfo = {
    title: '¡Hola, bienvenido a mi blog personal!',
    description: "Aquí encontrarás las mejores notas sobre software, tecnología, y diferentes temas",
    image: '/background.webp', 
};
  
/* const entries = [
    {
      title: 'Ejemplo de entrada 1',
      author: 'William Lane Craig',
      publicationDate: 'Noviembre 2022',
      contentText:'Este es el contenido de la entrada 1',
      image: 'https://source.unsplash.com/random?wallpapers',
    },
    {
      author: 'Carlos Francisco Aguilar Navarrete',
      title: 'Ejemplo de entrada 2',
      publicationDate: 'Enero 2023',
      contentText: 'Este es el contenido de la entrada 2',
      image: 'https://source.unsplash.com/random?wallpapers',
    }, 
];*/
  
export default function Home(navigation){
    const [entries, setEntries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAll().then((result) => {
            if(result){
                setEntries(result);
            }
        });
    }, []); 

    const handleClickCard = index => {
       navigate(`/entry/1`);
    }

    return (
        <Grid sx={{ backgroundColor: '#EBEEF3 !important'}}>
            <Container maxWidth="lg" sx={{ marginBottom: 20 }}>
                <AppToolbar title="My Blog" sections={[]} />
                <main>
                    <Header post={headerInfo} />
                    <Search />
                    <Grid sx={{ marginTop: 0 }} container spacing={4}>
                        {entries.map((entry) => (
                            <EntryCard 
                                key={entry.title} 
                                post={entry} 
                                onClick={handleClickCard}
                            />
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer description="Carlos Francisco Aguilar Navarrete" />
        </Grid>
    );
}