import * as React from 'react';
import { InputBase, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';

export default function Search() {
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
        <Grid sx={{ mt: 3 }}>            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Grid> 
      </Toolbar>
    </React.Fragment>    
  );
}