import _ from 'lodash';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const coordinates = posts => _.uniqBy(
  _.flatten(posts.map(post => post.frontmatter.coordinates.map(coord => coord))),
  v => `${v.coordinates[0]} ${v.coordinates[1]}`,
);

const markdownStyle = theme => Object.assign(
  {},
  {
    padding: theme.spacing.unit * 2,
    ...theme.typography.body1,
    '& img': {
      maxWidth: '100%',
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
};
