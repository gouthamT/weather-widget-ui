import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function RadioGroup({ name, label, ariaLabel, options, onChange, ...rest }) {
  const [selectedId, setSelectedId] = useState(rest.selectedId);
  useEffect(() => { }, [options, selectedId]);
  return <>
    {label && <label>{label}</label>}
    <ul className="option-group" aria-label={ariaLabel || label}>
      {
        options && options.map(option => <li className="radio-option" key={option.id}>
          <input
            className="radio-btn"
            type="radio"
            name={name}
            id={option.id}
            aria-label={option.ariaLabel || option.label}
            aria-checked={option.id === selectedId}
            checked={option.id === selectedId}
            onChange={() => {
              setSelectedId(option.id);
              onChange && onChange(option);
            }} />
          <label
            className="checkbox-label"
            htmlFor={option.id}>
            {option.label}
          </label>
        </li>)
      }
    </ul>
  </>;
}

const StringOrNumber = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number]);

RadioGroup.propTypes = {
  name: StringOrNumber.isRequired,
  label: StringOrNumber,
  ariaLabel: StringOrNumber,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      ariaLabel: PropTypes.string
    })
  ),
  selectedId: StringOrNumber,
  onChange: PropTypes.func
};

RadioGroup.defaultProps = {
  options: [],
  label: null
};

export default RadioGroup;