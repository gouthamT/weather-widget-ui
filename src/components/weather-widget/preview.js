import React from 'react';
import PropTypes from 'prop-types';
import { DefaultTitle } from '../../common/constants';

function Preview({ title, city, temp, windSpeed, windDirection, icon, showWind }) {
  return <div className="fade-in">
    <h4 className="caps title">{title || DefaultTitle}</h4>
    <div className="preview">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Avatar" />
      <div className="preview-description">
        <p>{city}</p>
        <h1 className="suffix-degree">{temp}</h1>
        {showWind && <small className="fade-in"><b>Wind</b>&nbsp;{windDirection}&nbsp;{windSpeed}Km/h</small>}
      </div>
    </div>
  </div>
};

Preview.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  showWind: PropTypes.bool,
  icon: PropTypes.string,
  temp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  windSpeed: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Preview;