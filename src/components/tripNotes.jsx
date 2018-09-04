import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Location from '@material-ui/icons/LocationOn';
import DateIcon from '@material-ui/icons/DateRange';
import { MapMarkerDistance as Distance } from 'mdi-material-ui';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  content: {
    paddingTop: 0,
    paddingnBottom: 0,
  },
  header: {
    paddingnBottom: '0 !important',
  },
  card: {
    margin: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 6,
  },
});

function TripNotes({
  km, duration, itinerary, classes,
}) {
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ root: classes.header, content: classes.header }}
        title="Trip details"
      />
      <CardContent className={classes.content}>
        <Typography variant="caption">
          <Distance style={{ fontSize: 20 }} />
          {` Distance covered: ${km}km`}
        </Typography>
        <Typography variant="caption">
          <DateIcon style={{ fontSize: 20 }} />
          {` Days spent: ${duration}`}
        </Typography>
        <Typography variant="caption">
          <Location style={{ fontSize: 20 }} />
          {` Itinerary details: ${itinerary.join(' -> ')}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

TripNotes.propTypes = {
  duration: PropTypes.number.isRequired,
  km: PropTypes.number.isRequired,
  itinerary: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TripNotes);
