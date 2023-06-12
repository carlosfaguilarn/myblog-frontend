import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

function EntryCard(props) {
  const { post, onClick } = props;

  return (
    <Grid item xs={12} md={12} onClick={onClick}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post.publicationDate}
              </Typography>
            </Grid>

            <Typography variant="subtitle1" color="text.secondary">
              Por: {post.author}
            </Typography>
            
            <Typography sx={{ marginTop: 2, marginBottom: 2 }} variant="subtitle1" paragraph>
              { 
                post.contentText.length > 70
                  ? (post.contentText.substring(0, 70) + '...')
                  : post.contentText 
              } 
            </Typography> 

            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="subtitle1" color="primary">
                Leer más
              </Typography>
            </Grid>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

EntryCard.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default EntryCard;
