import React, { useState } from 'react';
import { Grid, FormControl, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import SaveButton from './SaveButton';
import { save } from '../../Services/Entry/Entry';
import AlertDialog from './AlertDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NewEntry(props){
  const { open, handleClose } = props;
  const [ entry, setEntry ] = useState({});
  const [ isDialogResultOpen, setIsDialogResultOpen ] = useState(false);
  var newEntryResult = "";

  const handleClickOpenDialog = () => {
    setIsDialogResultOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogResultOpen(false);
  };


  const handleChangeEntry = e =>{ 
    setEntry({
      ...entry,
      [e.target.name]: e.target.value
    });
  } 
  
  const handleClickPublicar = e => { 
    entry.publicationDate = new Date();
    save(entry).then((result) => {
      if(result){
        newEntryResult = "¡Entrada publicada correctamente!";
      }else{
        newEntryResult = "Ocurrió un error al publicar la entrada";
      }
      setEntry({});
      setIsDialogResultOpen(true);
    });
  }

  return (
    <div> 
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: "#EBEEF3", color: "grey"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nueva entrada
            </Typography> 
            <SaveButton onClick={handleClickPublicar} loading={true} success={false} label="PUBLICAR"/>
          </Toolbar>
        </AppBar>
        <DialogContent dividers sx={{backgroundColor: "#e9e9e9",}}>
            <Grid sx={{ height: 300, paddingTop: 5, paddingLeft: 20, paddingRight: 20 }}> 
                <Grid container xs={12} md={12} display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'flex-start'}> 
                    <Grid item xs={12} md={12}>
                        <FormControl sx={{width: '100%', marginBottom: 2 }}> 
                            <label>Título</label>
                            <TextField sx={{ backgroundColor: "white" }} disableUnderline={true} value={entry.title || "" } name="title" onChange={handleChangeEntry}/>
                        </FormControl>
                    </Grid> 
                    <Grid item xs={12} md={12}>
                        <FormControl sx={{width: '100%', marginBottom: 2}}> 
                            <label>Autor</label>
                            <TextField sx={{ backgroundColor: "white" }} disableUnderline={true} value={entry.author || "" } name="author" onChange={handleChangeEntry}/>
                        </FormControl>
                    </Grid> 
                    <Grid item xs={12} md={12}>
                        <FormControl sx={{width: '100%', marginBottom: 2 }}> 
                            <label>Contenido</label>
                            <TextField sx={{ backgroundColor: "white" }} disableUnderline={true} value={entry.contentText || "" } name="contentText" onChange={handleChangeEntry} multiline maxRows={5}/>
                        </FormControl>
                    </Grid> 
                    <Grid item xs={12} md={12}>
                        <FormControl sx={{width: '100%', marginBottom: 2}}> 
                            <label>Imagen de portada (URL)</label>
                            <TextField  sx={{ backgroundColor: "white" }} disableUnderline={true} value={entry.image || "" } name="image" onChange={handleChangeEntry}/>
                        </FormControl>
                    </Grid> 
                </Grid>
            </Grid>

            <AlertDialog 
              title="Resultado"
              open={isDialogResultOpen} 
              handleClose={handleCloseDialog} 
              description={newEntryResult} 
            />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default NewEntry;