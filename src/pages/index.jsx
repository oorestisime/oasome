import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Location from '@material-ui/icons/LocationOn';
import DateIcon from '@material-ui/icons/DateRange';
import Hidden from '@material-ui/core/Hidden';
import { MapMarkerDistance as Distance, Earth, Instagram } from 'mdi-material-ui';

import withRoot from '../withRoot';
import App from '../components/layout';
import Posts from '../components/posts';
import Map from '../components/map';
import Section from '../components/section';
import Instafeed from '../components/instafeed';
import {
  flatten,
  groupBy,
  coordinates,
  calculateTotals,
} from '../components/tools';

const styles = theme => ({
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  headline: {
    padding: `${theme.spacing.unit * 3} 0`,
    textAlign: 'center',
  },
  indie: {
    fontFamily: 'Indie flower',
  },
  paddingText: {
    paddingBottom: theme.spacing.unit * 3,
  },
  aboutButton: {
    float: 'center',
  },
  stats: {
    textAlign: 'center',
    '& span': {
      fontSize: 36,
    },
  },
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      didViewCountUp: false,
    };
  }

  onVisibilityChange(isVisible) {
    this.setState({ didViewCountUp: isVisible });
  }

  render() {
    const { data, classes } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const nodes = flatten(posts);
    const { [true]: featured, [false]: latest } = groupBy(nodes, 'featured');
    const coords = coordinates(nodes);
    const totals = calculateTotals(nodes);
    const countries = _.uniq(nodes.map(post => post.frontmatter.country)).length;

    return (
      <App>
        <Section>
          <Grid item xs={12}>
            <Typography variant="display1" className={classes.headline}>
              Featured articles
            </Typography>
          </Grid>
          <Posts posts={featured} />
        </Section>
        <Hidden smDown>
          <Section shade="300">
            <Grid item xs={12}>
              <Typography variant="display1" className={classes.headline}>
                Our trips in numbers
              </Typography>
            </Grid>
            <VisibilitySensor
              onChange={e => this.onVisibilityChange(e)}
              offset={{ top: 10 }}
              delayedCall
            >
              <Fragment>
                <Grid item xs={12} sm={3} className={classes.stats}>
                  <Distance style={{ fontSize: 50 }} />
                  <Typography variant="headline">
                    Distance covered
                  </Typography>
                  <CountUp
                    duration={2}
                    start={0}
                    end={this.state.didViewCountUp ? totals.km : 0}
                    suffix=" km"
                  />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.stats}>
                  <DateIcon style={{ fontSize: 50 }} />
                  <Typography variant="headline">
                    Duration
                  </Typography>
                  <CountUp
                    duration={2}
                    start={0}
                    end={this.state.didViewCountUp ? totals.duration : 0}
                    suffix=" days"
                  />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.stats}>
                  <Earth style={{ fontSize: 50 }} />
                  <Typography variant="headline">
                    Countries
                  </Typography>
                  <CountUp
                    duration={2}
                    start={0}
                    end={this.state.didViewCountUp ? countries : 0}
                  />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.stats}>
                  <Location style={{ fontSize: 50 }} />
                  <Typography variant="headline">
                    Destinations
                  </Typography>
                  <CountUp
                    duration={2}
                    start={0}
                    end={this.state.didViewCountUp ? totals.stops : 0}
                    suffix=" stops"
                  />
                </Grid>
              </Fragment>
            </VisibilitySensor>
          </Section>
        </Hidden>
        <Hidden smDown>
          <Section>
            <Grid item xs={12}>
              <Typography variant="display1" className={classes.headline}>
                Where we have been!
              </Typography>
            </Grid>
            <Map cities={coords} />
          </Section>
        </Hidden>
        <Section shade="300">
          <Grid item xs={12}>
            <Typography variant="display1" className={classes.headline}>
              About us
            </Typography>
          </Grid>
          <Grid item sm={1} />
          <Grid item xs={12} sm={6}>
            <Typography variant="headline" className={classNames(classes.paddingText, classes.indie)}>
              Hello there, we are A and O
            </Typography>
            <Typography className={classes.paddingText}>
              Welcome to the OAsome blog.
              <br />
              This is a travel blog of a couple who guess what … their initials
              start with an O and an A.
              They both really  like travelling new places, finding out
              interesting adventures and take casual photos.
              <br />
              <br />
              This blog also gives an area for friends to share some of their
              experiences or handful trips that they found out during their travel experiences!
              <br />
              <br />
              Would you like to take a stroll around the OAsome world?
              <br />
              <br />
              Then, follow along on our short adventures as we capture the planet!
            </Typography>
            <Link to="/about">
              <Button className={classes.aboutButton} variant="raised" color="primary">
                Read more
              </Button>
            </Link>
          </Grid>
          <Grid item sm={1} />
          <Grid item xs={12} sm={4}>
            <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
          </Grid>
        </Section>
        <Section>
          <Grid item xs={12}>
            <Typography variant="display1" className={classes.headline}>
              Latest articles
            </Typography>
          </Grid>
          <Posts posts={latest.slice(0, 3)} />
        </Section>
        <Hidden smDown>
          <Section noPadding>
            <Grid item xs={12}>
              <Typography
                variant="display1"
                className={classNames(classes.headline, classes.indie, classes.paddingText)}
              >
                <Instagram />
                {' OAsome'}
              </Typography>
            </Grid>
            <Instafeed data={data.allInstaNode} />
          </Section>
        </Hidden>
      </App>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allInstaNode (
      limit: 8
    ){
      edges {
        node {
          id
          likes {
            count
          }
          localFile {
            childImageSharp {
              fixed(width: 150, height:150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: {type: {in: ["photo", "article"] }  }}
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            km
            featured
            itinerary
            duration
            coordinates {
              country
              coordinates
            }
            country
            cover {
              childImageSharp{
                fluid(maxHeight: 250, maxWidth: 350, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(Index));
