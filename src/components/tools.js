import _ from 'lodash';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const coordinates = posts => _.uniqBy(
  _.flatten(posts
    .filter(post => post.frontmatter.coordinates && post.frontmatter.type !== 'friends')
    .map(post => post.frontmatter.coordinates.map(coord => coord))),
  v => `${v.coordinates[0]} ${v.coordinates[1]}`,
);
const groupBy = (posts, field) => _.groupBy(posts, post => post.frontmatter[field]);
const flatten = posts => posts.map(post => post.node);
const calculateTotals = posts => posts.reduce(
  (accumulator, post) => {
    const stops = post.frontmatter.itinerary !== null ? post.frontmatter.itinerary.length : 0;
    return Object.assign(
      {
        km: (accumulator.km || 0) + post.frontmatter.km || 0,
        duration: (accumulator.duration || 0) + post.frontmatter.duration || 0,
        stops: (accumulator.stops || 0) + stops,
      },
    );
  },
  0,
);

const markdownStyle = theme => Object.assign(
  {},
  {
    padding: theme.spacing.unit * 2,
    ...theme.typography.body1,
    '& img': {
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      paddingBottom: theme.spacing.unit * 2,
    },
    '& p': {
      marginLeft: theme.spacing.unit * 2,
      ...theme.typography.body1,
    },
    '& h1': {
      ...theme.typography.display1,
    },
    '& h2': {
      ...theme.typography.headline,
    },
    '& h3': {
      ...theme.typography.subheading,
    },
    '& h4,h5,h6': {
      ...theme.typography.caption,
    },
    '& h1,h2,h3,h4,h5,h6': {
      fontFamily: "'Indie Flower', cursive",
    },
  },
);

export {
  capitalize,
  coordinates,
  markdownStyle,
  calculateTotals,
  groupBy,
  flatten,
};
