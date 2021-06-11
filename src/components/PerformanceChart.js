import React from "react";
import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

// Labels for the PolarAngleAxis ticks
const kindLabels = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

/**
 * PerformanceChart
 * @date 2021-06-11
 * @param {Object} props - Props
 * @param {Object} props.performances
 * @param {number} props.performances.userId - ID of user
 * @param {Array} props.performances.data - Data for each kind
 * @param {number} props.performances.data[].value - Value of the performance
 * @param {number} props.performances.data[].kind - ID for the performance kind between 1 and 6
 * @param {Object} props.performances.kind- Each kind, with ID and value associated
 * @returns {Component} - JSX React Component
 */
class PerformanceChart extends React.Component {
  constructor(props) {
    super(props);

    const propsWithoutPointer = Object.assign(props);
    const { performances } = propsWithoutPointer;

    performances.data.sort((a, b) => b.kind - a.kind);
    this.performances = performances.data;
  }

  render() {
    return (
      <>
        <ResponsiveContainer
          debounce={0}
          width={"99%"}
          className="performance-chart"
        >
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="60%"
            data={this.performances}
          >
            <PolarGrid />
            <PolarAngleAxis
              tickLine={false}
              ticks={false}
              stroke="white"
              dataKey="kind"
              axisLine={false}
              tickFormatter={(value, index) => kindLabels[value]}
            />
            <Radar dataKey={"value"} fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </>
    );
  }
}

PerformanceChart.propTypes = {
  performances: PropTypes.shape({
    userId: PropTypes.number,
    kind: PropTypes.objectOf(PropTypes.string),
    data: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        kind: PropTypes.number,
      })
    ),
  }),
};

export default PerformanceChart;
