import _ from 'lodash';

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const coordinates = posts => _.uniqBy(_.flatten(posts.map(post => post.frontmatter.coordinates.map(coord => coord))), 'name');


export {
  capitalize,
  coordinates,
};
