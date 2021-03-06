import React from "react";
import PropTypes from "prop-types";
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

/**
 * CustomLabel for ScoreChart
 * @date 2021-06-11
 * @param {Object} props - Props for customLabel
 * @returns {Component} - JSX React Component
 */
function CustomLabel(props) {
  const { cx, cy } = props.viewBox;
  return (
    <>
      <text
        x={cx + 3}
        y={cy - 20}
        fill="#20253A"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="24"
          fontWeight={700}
          fontFamily="Roboto"
        >
          {`${Math.round(props.value * 100)}%`}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 8}
        fill="#9B9EAC"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="15"
          fontWeight={500}
          fontFamily="Roboto"
        >
          {`de votre`}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 31}
        fill="#9B9EAC"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="15"
          fontWeight={500}
          fontFamily="Roboto"
        >
          {`objectif`}
        </tspan>
      </text>
    </>
  );
}

/**
 * ScoreChart
 * @date 2021-06-11
 * @param {Object} props - Props
 * @param {number} props.scorePercentage - Percentage between 0 and 1 for score
 * @returns {Component} - JSX React Component
 */
class ScoreChart extends React.Component {
  render() {
    return (
      <>
        <div className="score-title">Score</div>
        <ResponsiveContainer debounce={0} width={"99%"}>
          <RadialBarChart
            margin={{
              top: 35,
              left: 10,
              bottom: 10,
              right: 10,
            }}
            className="test-chart"
            innerRadius="100%"
            outerRadius="90%"
            data={[
              {
                name: "score",
                score: this.props.scorePercentage,
                fill: "#E60000",
              },
            ]}
            startAngle={180}
            endAngle={-180}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              angleAxisId={0}
              tick={false}
              tickSize={0}
              style={{
                fill: "#fff",
              }}
              axisLineType="circle"
            />
            <RadialBar
              minAngle={0}
              label={<CustomLabel />}
              clockWise={true}
              dataKey="score"
              cornerRadius={10}
              radius={100}
              isAnimationActive={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </>
    );
  }
}

ScoreChart.propTypes = {
  scorePercentage: PropTypes.number,
};

export default ScoreChart;
