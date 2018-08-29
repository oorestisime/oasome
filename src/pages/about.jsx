import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import withRoot from '../withRoot';
import App from '../components/layout';


const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
  },
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 4,
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  response: {
    padding: theme.spacing.unit,
  },
});

function Error({
  classes,
}) {
  return (
    <App title="About this blog">
      <Grid container spacing={24} className={classes.spacer}>
        <Grid item sm={12} className={classes.paperSpacer}>
          <Paper className={classes.paper}>
            <Typography variant="display1">
              Where am I?
            </Typography>
            <Typography className={classes.response}>
              Hello there and welcome to the OAsome blog.
              This is a blog of couple who guess what, their initials start with an A and an O.
              They both really like visiting new places, finding out about interesting adventures
              and take casual photos.
              <br />
              This blog also gives an area for friends to share some of their
              experiences or fandfull trips they find out during their travel adventures
            </Typography>
            <Typography variant="display1">
              Why another travel blog?
            </Typography>
            <Typography className={classes.response}>
              Yay we agree, you would say all good but why another travel blog.
              And truth to be told we thought about this some time as well,
              but we ended up deciding because:
              <ul>
                <li>everyone has something different to offer in terms of adventures</li>
                <li>
                we think we have experiences that could be useful for other people, just like
                other blogs provided and will provide insights for us
                at some point during our travels.
                </li>
                <li>it is fun and you should try it to!</li>
                <li>we document our experiences in a beautiful and constructive way</li>
              </ul>
            </Typography>
            <Typography variant="display1">
              So who are you?
            </Typography>
            <Typography className={classes.response}>
              We are not your typical travel blog couple that is in another country every
              month or week or... We are no digital nomads nor backpackers
              wandering around the world although we guess we both would love to try this out.
              We work as statitician and computer scientist.
              <br />
              <br />
              We are just a normal couple living currently in Paris in their mid-tweenties
              that has the opportunity through two stable jobs, saving money and much much
              desire to travel 3-4 times per year. We have been in France for 5 years now but we are
              originally from Cyprus.
              <br />
              <br />
              Our travel adventures involve every time a mix bag of everything:
              museums, ancient temples, wandering around the streets to get the feel of
              cities and villages, hikings, food and alcohol tasting, swimming, snorkeling,
              sailing, zip-lining and taking lots of photos. We are no professional or anything.
              You could probably describe us best as amateur click happy more than anything.
              <br />
              <br />
              We have not been to many countries yet, but we will try to provide details,
              tips and photos from our trips in Mexico, Usa, Greece, Spain, Italy, Germany,
              France and some interesting tips about Paris and Cyprus.
            </Typography>
            <Typography variant="display1">
              Using the content, the photos or the code of this blog
            </Typography>
            <Typography className={classes.response}>
              First let us thank you for showing the interest in our blog.
              Content and photos of this blog are released under the
              Creative Commons license and the code is available on github under
              the GNU Affero General Public License 3.0
            </Typography>
            <Typography variant="subheading">
              Content and photos
            </Typography>
            <Typography>
              Since we did not start this blog with a purpose of getting money out
              of it we believe that the best way to release our content is with the
              Creative Commons license. You can share and adapt our content and photos
              with the condition that the purpose of it is non-commercial, you attribute
              back credit to us and you share it with the same license.
            </Typography>
            <Typography variant="subheading">
              Code
            </Typography>
            <Typography>
              To build this blog we relied on a series of open source frameworks and tools
              and we felt an obligation to provide back as well to that wondeful community.
              The choice was easy!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </App>
  );
}

Error.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(Error));
