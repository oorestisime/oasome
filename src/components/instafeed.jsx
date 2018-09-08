import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Heart } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';


import insta1 from '../static/insta/insta1.jpg';
import insta2 from '../static/insta/insta2.jpg';
import insta3 from '../static/insta/insta3.jpg';
import insta4 from '../static/insta/insta4.jpg';
import insta5 from '../static/insta/insta5.jpg';
import insta6 from '../static/insta/insta6.jpg';
import insta7 from '../static/insta/insta7.jpg';
import insta8 from '../static/insta/insta8.jpg';
import insta9 from '../static/insta/insta9.jpg';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  caption: {
    color: theme.palette.primary.light,
  },
  tile: {
    '& img': {
      visibility: 'visible',
    },
    visibility: 'hidden',
    '&:hover': {
      visibility: 'visible',
    },
  },
});

function Instafeed({ classes }) {
  const feed = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
    insta9,
  ];

  return (
    <Hidden smDown>
      <div className={classes.root}>
        <GridList cellHeight={150} className={classes.gridList} cols={9}>
          {feed.map(img => (
            <GridListTile classes={{ tile: classes.tile }} key={img}>
              <img src={img} alt={img} />
              <GridListTileBar
                className={classes.caption}
                style={{ height: '25px' }}
                actionIcon={(
                  <IconButton>
                    <LinkIcon className={classes.caption} />
                  </IconButton>
                )}
                subtitle={(
                  <span>
                    <Heart style={{ fontSize: 12 }} />
                    {' 50'}
                  </span>)}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Hidden>
  );
}

Instafeed.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Instafeed);
