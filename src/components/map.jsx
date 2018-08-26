
import React, { Component } from 'react';
import { push } from 'gatsby';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from 'react-simple-maps';
import { withStyles } from '@material-ui/core/styles';

import { capitalize } from './tools';
import worldJson from '../static/world-50m.json';


const styles = {
  wrapper: {
    width: '100%',
    maxWidth: 980,
    margin: '0 auto',
  },
};

class ZoomPan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: false,
    };
  }

  handleHover(marker) {
    this.setState({
      marker,
    });
  }

  render() {
    const {
      cities,
      classes,
      center,
      zoom,
    } = this.props;

    return (
      <div>
        <div className={classes.wrapper}>
          <ComposableMap
            projectionConfig={{
              scale: 205,
            }}
            width={980}
            height={551}
            style={{
              width: '100%',
              height: 'auto',
            }}
          >
            <ZoomableGroup center={center} zoom={zoom} disablePanning>
              <Geographies geography={worldJson}>
                {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: '#ECEFF1',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: '#607D8B',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      pressed: {
                        fill: '#FF5722',
                        stroke: '#607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    }}
                  />
                ))}
              </Geographies>
              <Markers>
                {cities.map((marker, i) => (
                  <Marker
                    key={i}
                    onMouseEnter={() => this.handleHover(`${marker.name} / ${capitalize(marker.country)}`)}
                    onMouseLeave={() => this.handleHover(null)}
                    onClick={() => push(`/destination/${marker.country}`)}
                    marker={marker}
                    style={{
                      default: { stroke: '#455A64' },
                      hover: { stroke: '#FF5722' },
                      pressed: { stroke: '#FF5722' },
                    }}
                  >
                    <g transform="translate(-12, -24)">
                      <path
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                      />
                      <circle
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        cx="12"
                        cy="9"
                        r="3"
                      />
                    </g>
                  </Marker>
                ))}
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
          <Typography variant="headline" className={classes.wrapper}>
            {this.state.marker !== null ? this.state.marker : ''}
          </Typography>
        </div>
      </div>
    );
  }
}

ZoomPan.propTypes = {
  classes: PropTypes.shape().isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
};


ZoomPan.defaultProps = {
  center: [0, 20],
  zoom: 1,
};


export default withStyles(styles)(ZoomPan);
