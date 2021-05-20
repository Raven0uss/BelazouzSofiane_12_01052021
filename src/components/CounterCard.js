import React from "react";

const formatValueCounter = (value) => {
  const valueString = `${value}`;
  if (value > 1000)
    return `${valueString.slice(0, valueString.length - 3)},${valueString.slice(
      valueString.length - 3
    )}`;
  return value;
};

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

export default CounterCard;
