import React from "react";
import PropTypes from "prop-types";
import caloriesIcon from "../assets/calories.png";
import proteinsIcon from "../assets/proteines.png";
import carbosIcon from "../assets/glucides.png";
import lipidsIcon from "../assets/lipides.png";
import CounterCard from "./CounterCard";

/**
 * Take a key based on data of api, and return object with needed information to render card
 * @date 2021-06-11
 * @param {string} key - Key in api data
 * @param {number} value - Value associated to the key
 * @returns {(Object|null)} - Returns formatted data for card
 */
const getCounterData = (key, value) => {
  switch (key) {
    case "calorieCount":
      return {
        label: "Calories",
        id: "calories",
        value,
        icon: caloriesIcon,
        bgIcon: "#FF00000F",
        unit: "kCal",
      };
    case "proteinCount":
      return {
        label: "Proteines",
        id: "proteins",
        value,
        icon: proteinsIcon,
        bgIcon: "#4AB8FF1A",
        unit: "g",
      };
    case "carbohydrateCount":
      return {
        label: "Glucides",
        id: "carbohydrates",
        value,
        icon: carbosIcon,
        bgIcon: "#F9CE231A",

        unit: "g",
      };
    case "lipidCount":
      return {
        label: "Lipides",
        id: "lipids",
        value,
        icon: lipidsIcon,
        bgIcon: "#FD51811A",

        unit: "g",
      };
    default:
      return null;
  }
};

/**
 * Loop on the data and format it with getCounterData
 * @date 2021-06-11
 * @param {Array} data - Data from api
 * @returns {Array} - Returns formatted data array for cards
 */
const formatCounters = (data) => {
  return Object.keys(data).map((key) => getCounterData(key, data[key]));
};

/**
 * Render all the cards
 * @date 2021-06-11
 * @param {Object} props - Props
 * @param {number} props.data.calorieCount - Calories
 * @param {number} props.data.carbohydrateCount - Glucides
 * @param {number} props.data.lipidCount - Lipids
 * @param {number} props.data.proteinCount - Proteins
 * @returns {Component} - JSX React Component
 */
class CountersSummary extends React.Component {
  constructor(props) {
    super(props);

    this.counters = formatCounters(props.data);
  }

  render() {
    return (
      <div id="counter-list">
        {this.counters.map((counter) => (
          <CounterCard {...counter} key={counter.id} />
        ))}
      </div>
    );
  }
}

CountersSummary.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
    proteinCount: PropTypes.number,
  }),
};

export default CountersSummary;
