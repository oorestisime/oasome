import React, { Component } from 'react';
import { Link } from 'gatsby';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Chip from '@material-ui/core/Chip';
import blueGrey from '@material-ui/core/colors/blueGrey';


const chipStyle = (theme) => {
  const background = blueGrey[50];

  return {
    chip: {
      margin: theme.spacing.unit / 3,
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: emphasize(background, 0.08),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(background, 0.12),
      },
    },
    stripLink: {
      textDecoration: 'none',
    },
    chipRow: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  };
};

class TagCloud extends Component {
  static createChip(classes, tag) {
    return (
      <Link key={tag} to={`/tag/${tag}/`}>
        <Chip
          className={classes.chip}
          label={tag}
          clickable
        />
      </Link>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.chipRow}>
        {this.props.tags.map(tag => TagCloud.createChip(classes, tag))}
      </div>
    );
  }
}

TagCloud.propTypes = {
  classes: PropTypes.shape().isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(chipStyle, { withTheme: true })(TagCloud);
