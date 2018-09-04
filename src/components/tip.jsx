import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Warning from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';
import yellow from '@material-ui/core/colors/yellow';

const styles = theme => ({
  yellowAvatar: {
    color: '#fff',
    backgroundColor: yellow[700],
  },
  content: {
    paddingTop: 0,
    paddingnBottom: 0,
  },
  header: {
    paddingnBottom: '0 !important',
  },
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
});

function Tip({
  title, children, classes,
}) {
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ root: classes.header, content: classes.header }}
        avatar={(
          <Avatar className={classes.yellowAvatar}>
            <Warning />
          </Avatar>
        )}
        title={title}
      />
      <CardContent className={classes.content}>
        <Typography component="p">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

Tip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(Tip);
