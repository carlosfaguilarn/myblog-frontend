import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppToolbar from './AppToolbar';
import Footer from './Footer';
import Search from './Search';
import Header from './Header';
import EntryCard from './EntryCard';
import { getAll } from '../../Services/Entry/Entry'; 
import HomeStyles from '../../assets/css/HomeStyles';

const headerInfo = {
    title: '¡Hola, bienvenido a mi blog personal!',
    description: "Aquí encontrarás las mejores notas sobre software, tecnología, y diferentes temas",
    image: '/background.webp', 
};
   
function Home(props){
    const { classes } = props;
    const [query, setQuery] = useState("");
    const [onlineState, setOnlineState] = useState(true);
    const [entries, setEntries] = useState([]);
    const [entriesAll, setEntriesAll] = useState([]);
    const navigate = useNavigate();

    /**
     * get data from web service
     */
    useEffect(() => {
        getAll().then(
            (result) => {
                if(result){
                    setEntries(result);
                    setEntriesAll(result);
                    setOnlineState(true);

                    //save data in local storage  
                    localStorage.setItem('entries', JSON.stringify(result));
                }
            }, 
            (reason) => {
                setOnlineState(false);

                // get data from local storage
                const items = JSON.parse(localStorage.getItem('entries'));
                if (items) {
                    setEntries(items);
                    setEntriesAll(items);
                }
            },
        );
    }, []);     

    const handleClickCard = (index) => {
       navigate(`/entry/${index}`);
    }

    const handleChangeQuerySearch = e =>{  
        setQuery(e.target.value);
    } 
      
    const handleClickSearch = () => {
        if(query === ""){
            setEntries(entriesAll);
        }else{
            setEntries(entriesAll.filter(entry => {
                return entry.title.toLowerCase().includes(query.toLowerCase()) ||
                    entry.author.toLowerCase().includes(query.toLowerCase()) ||
                    entry.contentText.toLowerCase().includes(query.toLowerCase())
            })); 
        }
    };

    return (
        <Grid className={classes.background}>
            <Container maxWidth="lg" sx={classes.container}>
                <AppToolbar onlineState={onlineState} title="My Blog" sections={[]} />
                <main>
                    <Header post={headerInfo} />
                    <Search 
                        value={query} 
                        onChangeQuery={handleChangeQuerySearch}
                        onClickSearch={handleClickSearch}
                        onlineState={onlineState} 
                        subtitle={
                            entries.length > 0
                            ? "Tal vez te interese leer:"
                            : "Aún no hay entradas publicadas"
                        }
                    />
                    <Grid container spacing={4} className={classes.entryContainer}>
                        {entries.map((entry) => (
                            <EntryCard 
                                key={entry.title} 
                                post={entry} 
                                onClick={
                                    () => handleClickCard(entry.id)
                                }
                            />
                        ))}
                    </Grid>
                </main>
            </Container>
            <Footer description="Carlos Francisco Aguilar Navarrete" />
        </Grid>
    );
}

export default withStyles(HomeStyles)(Home);