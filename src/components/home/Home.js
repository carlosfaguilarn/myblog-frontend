import { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import AppToolbar from './AppToolbar';
import Footer from './Footer';
import Search from './Search';
import Header from './Header';
import EntryCard from './EntryCard';
import { getAll } from '../../Services/Entry/Entry';

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
  
export default function Home(){
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        getAll().then((result) => {
            if(result){
                setEntries(result);
            }
        });
    }, []); 

    return (
        <Grid>
            <Container maxWidth="lg">
                <AppToolbar title="My Blog" sections={[]} />
                <main>
                    <Header post={headerInfo} />
                    <Search />
                    <Grid sx={{ marginTop: 1 }} container spacing={4}>
                        {entries.map((post) => (
                            <EntryCard key={post.title} post={post} />
                        ))}
                    </Grid>  
                </main>
            </Container>
            <Footer description="Carlos Francisco Aguilar Navarrete" />
        </Grid>
    );
}