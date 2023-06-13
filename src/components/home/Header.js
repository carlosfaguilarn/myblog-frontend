import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Header(props) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        color: '#fff',
        mb: 5,
        paddingTop: 25,
        fontWeight: 'bold',
        backgroundColor: 'grey.800',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image || ""})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image || ""} alt={post.imageText || ""} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >         
            <Typography style={{backgroundColor: '#41475bba'}} component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title || ""}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description || ""}
            </Typography> 
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

Header.propTypes = {
  post: PropTypes.shape({ 
    image: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
