import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArchiveIcon from '@material-ui/icons/Archive';
import HomeIcon from '@material-ui/icons/Home';
import PhotoIcon from '@material-ui/icons/PhotoCamera';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import PeopleIcon from '@material-ui/icons/People';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import grey from '@material-ui/core/colors/grey';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Collapse from '@material-ui/core/Collapse';
import {
  Twitter,
  Email,
  Instagram,
  GithubCircle,
  Facebook,
  Rss,
} from 'mdi-material-ui';


import Destinations from './destinations';


const styles = theme => ({
  toolbar: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 6,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  toolbarIe11: {
    display: 'flex',
  },
  wrapper: {
    height: '100%',
  },
  appBar: {
    flex: 'none',
    flexWrap: 'wrap',
    zIndex: 100,
    flexDirection: 'row',
  },
  appBarToolbar: {
    justifyContent: 'space-between',
    display: 'flex',
    flex: 1,
  },
  appBarSpacer: {
    paddingTop: theme.spacing.unit * 6,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  footer: {
    paddingLeft: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    backgroundColor: '#444444',
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: 'none',
    display: 'inline',
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    color: '#999999',
    '&:hover': {
      color: grey[900],
    },
  },
  footerLink: {
    color: '#999999',
  },
  footerIcons: {
    paddingBottom: theme.spacing.unit * 4,
  },
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expandDestinations: false,
    };
  }

  toggleDrawer(state) {
    this.setState({ open: state });
  }

  toggleList(item) {
    const { [item]: currentState } = this.state;
    this.setState({ [item]: !currentState });
  }

  render() {
    const {
      classes,
      title,
      children,
      width,
    } = this.props;
    const { open, expandDestinations } = this.state;

    return (
      <div className={classes.wrapper}>
        <Helmet titleTemplate="OAsome - %s" defaultTitle="OAsome Blog">
          <meta name="description" content="OAsome is a travel blog of couple. We detail out unique experiences and adventures around the world." />
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="True" />
        </Helmet>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.appBarToolbar} disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.toggleDrawer(true)}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography style={{ padding: '0.5rem', flexGrow: 1, fontWeight: 400 }} variant="headline" color="inherit" noWrap>
              {title}
            </Typography>
            {isWidthUp('sm', width) && (
              <div>
                <IconButton
                  color="inherit"
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                >
                  <Email />
                </IconButton>
              </div>)
            }
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => this.toggleDrawer(true)}
          onClose={() => this.toggleDrawer(false)}
        >
          <div className={classes.toolbarIe11}>
            <div className={classes.toolbar}>
              <Typography variant="title" color="inherit">
                OAsome
              </Typography>
            </div>
          </div>
          <Divider />
          <List component="nav">
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/archive/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <ArchiveIcon />
                  </ListItemIcon>
                  <ListItemText primary="Archive" />
                </ListItem>
              </Link>
              <Link to="/photos/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <PhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Photos" />
                </ListItem>
              </Link>
              <ListItem button onClick={() => this.toggleList('expandDestinations')}>
                <ListItemIcon>
                  <AirplaneIcon />
                </ListItemIcon>
                <ListItemText primary="Destinations" />
              </ListItem>
              <Collapse in={expandDestinations} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Destinations />
                </List>
              </Collapse>
              <Link to="/about/" style={{ textDecoration: 'none' }}>
                <ListItem button>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="About us" />
                </ListItem>
              </Link>
            </div>
          </List>
        </SwipeableDrawer>
        <div className={classes.appBarSpacer}>
          { children }
        </div>
        <footer className={classes.footer}>
          <Grid container>
            <Grid item xs={12} className={classes.footerIcons}>
              <ul className={classes.list}>
                <Instagram color="disabled" className={classes.icon} />
                <Twitter color="disabled" className={classes.icon} />
                <GithubCircle color="disabled" className={classes.icon} />
                <Email color="disabled" className={classes.icon} />
                <Facebook color="disabled" className={classes.icon} />
                <Rss color="disabled" className={classes.icon} />
              </ul>
            </Grid>
            <Typography className={classes.footerLink}>
              {'Both the texts and the photos are released under the '}
              <a rel="noopener noreferrer" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className={classes.footerLink}>
                Creative Commons License
              </a>
              {'. '}
              <br />
              {'Code of this blog is released under the '}
              <a rel="noopener noreferrer" target="_blank" href="https://www.gnu.org/licenses/agpl-3.0.en.html" className={classes.footerLink}>
                GNU Affero General Public License 3.0
              </a>
              {', and is available on '}
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/oorestisime/oasome" className={classes.footerLink}>
                Github
              </a>
            </Typography>
          </Grid>
        </footer>
      </div>
    );
  }
}


App.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  width: PropTypes.string.isRequired,
};

App.defaultProps = {
  children: null,
  title: 'OAsome blog',
};

export default withWidth()(withStyles(styles)(App));
