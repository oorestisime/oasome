import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Lightbox from 'react-images';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import TagCloud from './tagCloud';
import Share from './share';


const chipStyle = theme => (
  {
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    actions: {
      display: 'flex',
    },
    spacer: {
      margin: theme.spacing.unit,
    },

  }
);

class CardPost extends Component {
  static createChip(classes, tag) {
    return (
      <Chip
        className={classes.chip}
        label={tag}
      />
    );
  }

  constructor(props) {
    super(props);
    if (props.type === 'photo' && props.photos) {
      this.state = {
        shareOpen: false,
        anchorEl: null,
        lightbox: false,
        photos: props.photos.map(photo => Object.assign(
          { srcSet: photo.childImageSharp.fluid.srcSet },
        )),
      };
    } else {
      this.state = {
        shareOpen: false,
        anchorEl: null,
        lightbox: false,
      };
    }
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget, shareOpen: true });
  }

  handleClose() {
    this.setState({ anchorEl: null, shareOpen: false });
  }

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
    const {
      classes,
      title,
      date,
      cover,
      tags,
      content,
      expand,
      path,
      photos,
      type,
      timeToRead,
    } = this.props;
    const { shareOpen, anchorEl } = this.state;
    return (
      <div>
        <Card className={classes.spacer}>
          <CardHeader
            title={title}
            titleTypographyProps={{ variant: expand ? 'subheading' : 'display1' }}
            subheader={`${date} - ${timeToRead} min read`}
            action={(
              <div>
                <IconButton
                  aria-label="Share"
                  aria-owns={shareOpen ? 'share-menu' : null}
                  aria-haspopup="true"
                  onClick={evt => this.handleClick(evt)}
                >
                  <ShareIcon title={title} path={path} />
                </IconButton>
                <Menu
                  id="share-menu"
                  anchorEl={anchorEl}
                  open={shareOpen}
                  onClose={() => this.handleClose()}
                >
                  <Share title={title} path={path} />
                </Menu>
              </div>
            )}
          />
          <CardMedia title={title}>
            <Img fluid={cover.childImageSharp.fluid} />
          </CardMedia>
          <CardContent>
            {content}
            {type === 'photo' && photos && (
              <div>
                {photos.map((photo, i) => (
                  <a key={i} href={photo.childImageSharp.fluid.src} onClick={e => this.openLightbox(i, e)}>
                    <Img className={classes.spacer} fluid={photo.childImageSharp.fluid} />
                  </a>
                ))}
              </div>
            )}
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <TagCloud tags={tags} />
            {expand && (
              <IconButton
                className={classes.expand}
                href={path}
                aria-label="Read"
              >
                <ExpandMoreIcon />
              </IconButton>
            )}
          </CardActions>
        </Card>
        {type === 'photo' && photos && (
          <Lightbox
            backdropClosesModal
            images={this.state.photos}
            currentImage={this.state.photo}
            isOpen={this.state.lightbox}
            onClickPrev={() => this.gotoPrevLightboxImage()}
            onClickNext={() => this.gotoNextLightboxImage()}
            onClose={() => this.closeLightbox()}
          />
        )}
      </div>
    );
  }
}

CardPost.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string,
  content: PropTypes.node.isRequired,
  expand: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  cover: PropTypes.shape(),
  photos: PropTypes.arrayOf(PropTypes.object),
  timeToRead: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

CardPost.defaultProps = {
  photos: [],
  cover: {},
  path: null,
};


export default withStyles(chipStyle, { withTheme: true })(CardPost);
