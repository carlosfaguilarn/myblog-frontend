import { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

import Header from '../home/Header';
import Footer from '../home/Footer';
import AppToolbar from '../home/AppToolbar';
import { getOne } from '../../Services/Entry/Entry';
import EntryDetailStyles from '../../assets/css/EntryDetailStyles';

function EntryDetail(props){
    const { classes } = props;
    const [ entry, setEntry ] = useState({});
    const [onlineState, setOnlineState] = useState(true);
    const [ headerInfo, setHeaderInfo ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getOne(id).then(
            (result) =>{
                if(result){
                    setEntry(result);
                    setHeaderInfo({
                        title: result.title,
                        description: '',
                        image: result.image, 
                    });
                    setOnlineState(false);
                }
            },
            (reason) => {
                setOnlineState(false);

                // get data from local storage
                const items = JSON.parse(localStorage.getItem('entries'));                
                if (items && items.length > 0) {
                    const entry = items.find(entry => {
                        return entry.id === parseInt(id);
                    });

                    setEntry(entry);
                    setHeaderInfo({
                        title: entry.title,
                        description: '',
                        image: entry.image, 
                    });
                }
            },
        );
    }, []); 

    return (
        <Grid sx={{ backgroundColor: '#EBEEF3 !important'}}>
            <Container maxWidth="lg" className={classes.container}>
                <AppToolbar onlineState={onlineState}  title="My Blog" sections={[]} />
                <Header post={headerInfo} />
                <Grid>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography component="h2" variant="h5">
                            {entry.title || ""}
                        </Typography> 
                    </Grid>

                    <Grid container>
                        <Typography variant="subtitle1" color="text.secondary">
                            { entry.publicationDate || "" } Por: {entry.author || ""}
                        </Typography>
                    </Grid>

                    <Grid container>
                        <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="subtitle1" paragraph>
                            { 
                                entry.contentText || "" 
                            } 
                        </Typography> 
                    </Grid>
                </Grid>  
            </Container>
            <Footer description="Carlos Francisco Aguilar Navarrete" />
        </Grid>
    );
} 

export default withStyles(EntryDetailStyles)(EntryDetail);