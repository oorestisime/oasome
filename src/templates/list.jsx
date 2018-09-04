import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import withRoot from '../withRoot';
import App from '../components/layout';
import Map from '../components/map';
import Section from '../components/section';
import Posts from '../components/posts';
import { coordinates, capitalize } from '../components/tools';


const styles = theme => ({
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    paddingBotton: theme.spacing.unit * 4,
  },
  cardSpacer: {
    paddingRight: theme.spacing.unit * 2,
  },
});


function List({
  pageContext, classes,
}) {
  const {
    posts, title, type, pagesSum, page,
  } = pageContext;
  const coords = coordinates(posts);
  return (
    <App title={`OAsome - ${capitalize(title)}`}>
      <Section>
        {type !== 'tag'
          && (
            <Grid item sm={12} className={classes.paperSpacer}>
              <Map cities={coords} zoom={3} center={_.sample(coords).coordinates} />
            </Grid>
          )
        }
        <Posts posts={posts} />
      </Section>
      <MobileStepper
        variant="dots"
        steps={pagesSum}
        position="static"
        activeStep={page - 1}
        nextButton={(
          <Button size="small" href={`/${type}/${title}/page/${page + 1}`} disabled={page === pagesSum}>
            Next
            <KeyboardArrowRight />
          </Button>
        )}
        backButton={(
          <Button size="small" href={`/${type}/${page === 2 ? title : `${title}/page/${page - 1}`}/`} disabled={page === 1}>
            <KeyboardArrowLeft />
            Back
          </Button>
        )}
      />
    </App>
  );
}

List.propTypes = {
  classes: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(List));
