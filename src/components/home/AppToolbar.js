import * as React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Button, Typography } from '@mui/material';

function AppToolbar(props) {
  const { title } = props;
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, marginBottom: 2, borderColor: 'divider' }}>
        <Button size="small"> Suscríbete</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography> 
        <Button variant="outlined" size="small"> Acceder </Button>
      </Toolbar>
    </React.Fragment>
  );
}

AppToolbar.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default AppToolbar;
