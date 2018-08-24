import _ from 'lodash';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const coordinates = posts => _.uniqBy(_.flatten(posts.map(post => post.frontmatter.coordinates.map(coord => coord))), 'name');


export {
  capitalize,
  coordinates,
};
