import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

function PhotoComposition({ children }) {
  const photos = children.filter(child => typeof child !== 'string');
  const total = photos.length;
  return (
    <Grid container spacing={24}>
      {photos.map(photo => (
        <Grid item xs={12} sm={12 / total} key={photo.props.href}>
          {photo}
        </Grid>
      ))}
    </Grid>
  );
}

PhotoComposition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PhotoComposition;
