import _ from 'lodash';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const coordinates = posts => _.uniqBy(
  _.flatten(posts.map(post => post.frontmatter.coordinates.map(coord => coord))),
  v => `${v.coordinates[0]} ${v.coordinates[1]}`,
);


export {
  capitalize,
  coordinates,
};
