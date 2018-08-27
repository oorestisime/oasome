import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardPost from './cardPost';


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  chip: {
    margin: theme.spacing.unit,
  },
  title: {
    textDecoration: 'none',
  },
  spacer: {
    padding: theme.spacing.unit * 2,
  },
});

function Posts({
  classes, posts,
}) {
  if (posts.length > 0) {
    return posts.map(post => (
      <Grid item xs={12} sm={6} key={post.node.id} className={classes.spacer}>
        <CardPost
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          cover={post.node.frontmatter.cover}
          tags={post.node.frontmatter.tags}
          country={post.node.frontmatter.country}
          timeToRead={post.node.timeToRead}
          content={(
            <Typography component="p">
              {post.node.excerpt}
            </Typography>
          )}
          path={post.node.frontmatter.path}
          expand
          type="list"
        />
      </Grid>
    ));
  }
}

Posts.propTypes = {
  classes: PropTypes.shape().isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(Posts);
