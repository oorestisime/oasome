import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    minHeight: '100%',
    height: '100%',
    paddingRight: 0,
  },
  rootPadding: {
    padding: theme.spacing.unit,
  },
  fullWidth: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    maxWidth: 1200,
    flex: 1,
  },
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
  },
});

function Section({
  classes, children, shade, noPadding,
}) {
  return (
    <div
      className={classNames(classes.root, !noPadding && classes.rootPadding)}
      style={{ backgroundColor: grey[shade] }}
    >
      <div className={classes.fullWidth}>
        <Grid container spacing={0} className={!noPadding && classes.spacer}>
          { children }
        </Grid>
      </div>
    </div>
  );
}

Section.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  shade: PropTypes.string,
  noPadding: PropTypes.bool,
};

Section.defaultProps = {
  shade: '50',
  noPadding: false,
};

export default withStyles(styles)(Section);
