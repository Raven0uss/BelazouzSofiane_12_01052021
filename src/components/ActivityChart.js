import React from "react";
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

const formatData = (data) => {
  const dataList = data ?? [];
  return dataList.map((item, index) => ({
    name: index + 1,
    kg: item.kilogram,
    kCal: item.calories,
  }));
};

const CustomTooltip = ({ active, payload, label }) => {
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

export default ActivityChart;
