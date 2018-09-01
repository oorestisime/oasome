import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-images';

class PhotoComposition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbox: false,
      photo: undefined,
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
    const { perline, photos } = this.props;
    const parsed = JSON.parse(photos).map(photo => Object.assign({ src: photo }));
    return (
      <Grid container spacing={24}>
        {parsed.map((photo, i) => (
          <Grid item xs={12} sm={12 / Number(perline)} key={photo.src}>
            <a href={photo.src} onClick={e => this.openLightbox(i, e)}>
              <img alt={photo.src} src={photo.src} style={{ width: '100%', height: 'auto' }} />
            </a>
          </Grid>
        ))}
        {parsed && (
          <Lightbox
            backdropClosesModal
            images={parsed}
            currentImage={this.state.photo}
            isOpen={this.state.lightbox}
            onClickPrev={() => this.gotoPrevLightboxImage()}
            onClickNext={() => this.gotoNextLightboxImage()}
            onClose={() => this.closeLightbox()}
          />
        )}
      </Grid>
    );
  }
}

PhotoComposition.propTypes = {
  photos: PropTypes.string.isRequired,
  perline: PropTypes.string.isRequired,
};

export default PhotoComposition;
