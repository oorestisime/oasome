import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-images';

class PhotoComposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbox: false,
      photos: JSON.parse(props.photos),
    };
  }

  // dedup this code into a component to be used with cardPost as well
  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { perline } = this.props;
    const { photos } = this.state;
    return (
      <Grid container spacing={24}>
        {photos.map((photo, i) => (
          <Grid item xs={12} sm={12 / Number(perline)} key={i}>
            <a href={photo} onClick={e => this.openLightbox(i, e)}>
              <img src={photo} />
            </a>
          </Grid>
        ))}
      </Grid>
    );
  }
}

PhotoComposition.propTypes = {
  photos: PropTypes.string.isRequired,
  perline: PropTypes.string.isRequired,
};

export default PhotoComposition;
