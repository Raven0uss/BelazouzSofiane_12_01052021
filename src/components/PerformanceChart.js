import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const kindLabels = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

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

export default PerformanceChart;
