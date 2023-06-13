import * as React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, Button, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function AppToolbar(props) {
  const { title, onlineState } = props;
  const navigate = useNavigate();

  const handleClickInicio = (index) => {
    navigate(`/`);
 }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, marginBottom: 2, borderColor: 'divider' }}>
        <Button size="small" onClick={handleClickInicio}> INICIO </Button>
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
        <Grid>
          <Button 
            variant="outlined" 
            color={ onlineState ? "success" : "error" } 
            size="small"> 
              <FiberManualRecordIcon 
                sx={{ fontSize: 10, marginRight: 1 }} 
                color={ onlineState ? "success" : "error" } 
              />
              { onlineState ? "ONLINE" : "OFFLINE" } 
          </Button>
        </Grid>
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
