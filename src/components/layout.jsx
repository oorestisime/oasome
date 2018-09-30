import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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

import Section from './section';

import Destinations from './destinations';
import config from '../config';


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
      color: grey[200],
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
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://instagram.com/${config.instagram}/`}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://twitter.com/${config.twitter}`}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  color="inherit"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://facebook.com/${config.facebook}`}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                  href={`mailto:${config.email}`}
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
        <Section shade="900">
          <Grid item xs={12} className={classes.footerIcons}>
            <ul className={classes.list}>
              <a rel="noopener noreferrer" target="_blank" href={`https://instagram.com/${config.instagram}/`}>
                <Instagram color="disabled" className={classes.icon} />
              </a>
              <a rel="noopener noreferrer" target="_blank" href={`https://twitter.com/${config.twitter}`}>
                <Twitter color="disabled" className={classes.icon} />
              </a>
              <a rel="noopener noreferrer" target="_blank" href={`https://facebook.com/${config.facebook}`}>
                <Facebook color="disabled" className={classes.icon} />
              </a>
              <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${config.github}`}>
                <GithubCircle color="disabled" className={classes.icon} />
              </a>
              <a href={`mailto:${config.email}`}>
                <Email color="disabled" className={classes.icon} />
              </a>
              <a href="/rss.xml">
                <Rss color="disabled" className={classes.icon} />
              </a>
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
            <a rel="noopener noreferrer" target="_blank" href={`https://github.com/${config.github}`} className={classes.footerLink}>
              Github
            </a>
          </Typography>
        </Section>
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
