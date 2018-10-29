import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Heart, Instagram } from 'mdi-material-ui';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import Section from './section';

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
  headline: {
    padding: `${theme.spacing.unit * 3} 0`,
    paddingTop: theme.spacing.unit,
    textAlign: 'center',
  },
  indie: {
    fontFamily: 'Indie flower',
  },
  paddingText: {
    paddingBottom: theme.spacing.unit * 3,
  },
});

const Instafeed = props => (
  <StaticQuery
    query={graphql`
      query{
        allInstaNode (
          limit: 8
          sort: { fields: [likes], order: DESC }
        ){
          edges {
            node {
              id
              likes
              localFile {
                childImageSharp {
                  fixed(width: 150, height:150, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Hidden smDown>
        <Section noPadding>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              className={classNames(
                props.classes.headline,
                props.classes.indie,
                props.classes.paddingText,
              )}
            >
              <Instagram />
              {' OAsome'}
            </Typography>
          </Grid>
          <div className={props.classes.root}>
            <GridList cellHeight={150} className={props.classes.gridList} cols={8}>
              {data.allInstaNode.edges.map(img => (
                <GridListTile classes={{ tile: props.classes.tile }} key={img.node.id}>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://www.instagram.com/p/${img.node.id}`}
                  >
                    <Img fixed={img.node.localFile.childImageSharp.fixed} alt={img.node.id} />
                  </a>
                  <GridListTileBar
                    className={props.classes.caption}
                    style={{ height: '25px' }}
                    subtitle={(
                      <span>
                        <Heart style={{ fontSize: 12 }} />
                        {` ${img.node.likes}`}
                      </span>)}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Section>
      </Hidden>
    )}
  />
);


Instafeed.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Instafeed);
