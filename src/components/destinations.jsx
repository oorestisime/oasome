import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const Destinations = classes => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          distinct(field: frontmatter___country)
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                country
              }
            }
          }
        }
      }
    `}
    render={data => data.allMarkdownRemark.distinct.map(dest => (
      <Link key={dest} to={`/destination/${dest}`} style={{ textDecoration: 'none' }}>
        <ListItem button className={classes.nested}>
          <ListItemText inset primary={capitalize(dest)} />
        </ListItem>
      </Link>
    ))}
  />
);

export default withStyles(styles)(Destinations);
