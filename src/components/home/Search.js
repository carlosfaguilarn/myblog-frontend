import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, IconButton, Toolbar, Button, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NewEntry from '../entities/NewEntity';

import SearchStyles from '../../assets/css/SearchStyles';

function Search(props) {
  const { classes } = props;
  const { value, onClickSearch, onChangeQuery, onlineState, subtitle } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
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
                  {subtitle}                
            </Typography>
        </Grid>   

        <Grid className={classes.gridButtons} > 
          <Input
            value={value}
            onChange={onChangeQuery}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar..."
            disableUnderline={true} 
          />
          <IconButton onClick={onClickSearch}  type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon/>
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Button 
            disabled = {!onlineState}
            variant="contained"
            sx={{  
              marginLeft: 2,
              color: '#FFFFFF' 
            }} 
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

export default withStyles(SearchStyles)(Search);