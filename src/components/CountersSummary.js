import React from "react";
import caloriesIcon from "../assets/calories.png";
import proteinsIcon from "../assets/proteines.png";
import carbosIcon from "../assets/glucides.png";
import lipidsIcon from "../assets/lipides.png";
import CounterCard from "./CounterCard";

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

const formatCounters = (data) => {
  return Object.keys(data).map((key) => getCounterData(key, data[key]));
};

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

export default CountersSummary;
