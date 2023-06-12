import * as React from 'react';
import { InputBase, Grid, Typography, Divider, IconButton, Toolbar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NewEntry from '../entities/NewEntity';

export default function Search() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between'}}>
        <Grid sx={{ mt: 3 }}>
            <Typography
                component="h5"
                variant="h5"
                color="grey"
                align="center"
                noWrap
                sx={{ 
                    flex: 1,
                    fontSize: '1rem',
                }}
                >
                Tal vez te interese leer:
            </Typography>
        </Grid>   

        <Grid sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} > 
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button 
            sx={{ color: '#68696B' }} 
            onClick={handleClickOpen}
            startIcon={<AddIcon />}>
            Nueva entrada
          </Button> 
          
          <NewEntry open={open} handleClose={handleClose}>
            
          </NewEntry>
        </Grid>
      </Toolbar>
    </React.Fragment>    
  );
}