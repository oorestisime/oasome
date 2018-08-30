
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
import worldJson from '../static/world-50m-simplified.json';


const styles = {
  wrapper: {
    width: '100%',
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

  handleMapClick(geography) {
    const { cities } = this.props;
    // TODO Temporary fix. Will need to create a mapping later
    const country = geography.properties.NAME === 'United States of America' ? 'Usa' : geography.properties.NAME;
    const destination = cities.filter(city => city.country === country);
    if (destination.length > 0) {
      push(`/destination/${country}`);
    }
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
              scale: 340,
            }}
            width={1400}
            height={900}
            style={{
              width: '100%',
              height: 'auto',
            }}
          >
            <ZoomableGroup center={center} zoom={zoom} disablePanning>
              <Geographies geography={worldJson}>
                {(geographies, projection) => geographies.map(geography => geography.id !== 'ATA' && (
                  <Geography
                    key={geography.properties.NAME}
                    geography={geography}
                    projection={projection}
                    onClick={() => this.handleMapClick(geography)}
                    style={{
                      default: {
                        fill: '#f0f0f0',
                        stroke: '#cdcdcd',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: '#828282',
                        stroke: '#cdcdcd',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    }}
                  />
                ))}
              </Geographies>
              <Markers>
                {cities.map(marker => (
                  <Marker
                    key={marker.coordinates}
                    onMouseEnter={() => this.handleHover(`${marker.name} / ${capitalize(marker.country)}`)}
                    onMouseLeave={() => this.handleHover(null)}
                    marker={marker}
                    style={{
                      default: { stroke: '#505050' },
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
  cities: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number),
    country: PropTypes.string,
  })),
};


ZoomPan.defaultProps = {
  center: [0, 20],
  zoom: 1,
  cities: [],
};


export default withStyles(styles)(ZoomPan);
