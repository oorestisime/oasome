import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Heart } from 'mdi-material-ui';

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

function Instafeed({ classes, data }) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={150} className={classes.gridList} cols={8}>
        {data.edges.map(img => (
          <GridListTile classes={{ tile: classes.tile }} key={img.node.id}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.instagram.com/p/${img.node.id}`}
            >
              <img src={img.node.picture} alt={img.node.id} />
            </a>
            <GridListTileBar
              className={classes.caption}
              style={{ height: '25px' }}
              subtitle={(
                <span>
                  <Heart style={{ fontSize: 12 }} />
                  {` ${img.node.likes.count}`}
                </span>)}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Instafeed.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(Instafeed);
