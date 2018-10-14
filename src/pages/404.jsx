import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';


import withRoot from '../withRoot';
import App from '../components/layout';
import Section from '../components/section';

const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    padding: theme.spacing.unit * 1,
    textDecoration: 'none',
  },
});

function Error({
  classes,
}) {
  return (
    <App title="Oops something went wrong!!">
      <Section>
        <Grid item sm={12} className={classes.paperSpacer}>
          <Paper className={classes.paper}>
            <ErrorIcon style={{ fontSize: 100 }} />
            <Typography variant="h4">
              Could not find this page.
              <Link to="/" className={classes.button}>
                <Button variant="raised" color="primary">
                  Return home
                </Button>
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Section>
    </App>
  );
}

Error.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(Error));
