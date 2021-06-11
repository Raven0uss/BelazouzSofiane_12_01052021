import React from "react";
import PropTypes from "prop-types";

/**
 * Format value displayed for CounterCard
 * @date 2021-06-11
 * @param {number} value - Value to be formatted
 * @returns {string} - Returns formatted value
 */
const formatValueCounter = (value) => {
  const valueString = `${value}`;
  if (value > 1000)
    return `${valueString.slice(0, valueString.length - 3)},${valueString.slice(
      valueString.length - 3
    )}`;
  return value;
};

/**
 * CounterCard
 * @date 2021-06-11
 * @param {Object} props - Props
 * @param {string} props.label - Label of card
 * @param {string} props.id - id of card
 * @param {number} props.value - Value to be displayed in card
 * @param {string} props.icon - base64 icon to be displayed in the card
 * @param {string} props.unit - unit of the value
 * @param {string} props.bgIcon - backgroundColor for the icon of the card
 * @returns {Component} - JSX React Component
 */
class CounterCard extends React.Component {
  render() {
    return (
      <>
        <div className="counter-card">
          <div
            className="counter-card-icon-block"
            style={{
              backgroundColor: this.props.bgIcon,
            }}
          >
            <img
              className="counter-card-icon"
              src={this.props.icon}
              alt={this.props.id}
            />
          </div>
          <div className="counter-card-content">
            <div className="counter-card-value">
              {formatValueCounter(this.props.value) + this.props.unit}
            </div>
            <div className="counter-card-label">{this.props.label}</div>
          </div>
        </div>
      </>
    );
  }
}

CounterCard.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.string,
  unit: PropTypes.string,
  bgIcon: PropTypes.string,
};

export default CounterCard;
