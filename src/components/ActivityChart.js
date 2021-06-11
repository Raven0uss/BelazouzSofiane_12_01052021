import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";

/**
 * Format entry data for ActivityChart
 * @date 2021-06-11
 * @param {Array} data - Array with the data
 * @returns {Array} - Returns formatted data for graph
 */
const formatData = (data) => {
  const dataList = data ?? [];
  return dataList.map((item, index) => ({
    name: index + 1,
    kg: item.kilogram,
    kCal: item.calories,
  }));
};

/**
 * CustomTooltip for ActivityChart
 * @date 2021-06-11
 * @param {Object} props - Props for customTootlip
 * @param {boolean} props.active - Check if the tooltip has to be displayed
 * @param {Array} props.payload - Values to be displayed in tooltip
 * @returns {Component} - JSX React Component
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip-box">
        <p className="tooltip-label">{`${payload[0].value}kg`}</p>
        <p className="tooltip-label">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};

/**
 * CustomLegend for ActivityChart
 * @date 2021-06-11
 * @param {Object} props - Props for customLegend
 * @param {Array} props.payload - Values to be displayed in legend
 * @returns {Component} - JSX React Component
 */
const CustomLegend = (props) => {
  const { payload } = props;

  const legendList = ["Poids (kg)", "Calories brûlées (kCal)"];
  return (
    <div className="activity-legend-container">
      <p className="activity-legend-title">Activité quotidienne</p>
      <div className="activity-legend-payload-list">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="activity-legend-payload-block">
            <div
              className="activity-legend-payload-pin"
              style={{
                backgroundColor: entry.payload.fill,
              }}
            ></div>
            <span className="activity-legend-payload-value">
              {legendList[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * ActivityChar
 * @date 2021-06-11
 * @param {Object} props - Props
 * @param {Array} props.data - Data to be formatted.
 * @param {string} props.data[].day - Date of the data
 * @param {number} props.data[].kilogram - Kg for the date
 * @param {string} props.data[].calories - Calories spent for the day
 * @returns {Component} - JSX React Component
 */
class ActivityChart extends React.Component {
  constructor(props) {
    super(props);

    this.data = formatData(this.props.data);
  }

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={this.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={8}
        >
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            content={<CustomLegend />}
          />
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" dy={16} tickLine={false} />
          <YAxis
            orientation="right"
            dx={20}
            tickLine={false}
            axisLine={false}
            tickCount={3}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#C4C4C480" }} />
          <Bar dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
          <Bar
            dataKey="kCal"
            fill="#E60000"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

export default ActivityChart;
