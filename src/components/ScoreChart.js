import React from "react";
import {
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

function CustomLabel(props) {
  const { cx, cy } = props.viewBox;
  console.log(props);
  return (
    <>
      <text
        x={cx + 3}
        y={cy - 15}
        fill="#20253A"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="26"
          fontWeight={700}
          fontFamily="Roboto"
        >
          {`${Math.round(props.value * 100)}%`}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 15}
        fill="#9B9EAC"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="16"
          fontWeight={500}
          fontFamily="Roboto"
        >
          {`de votre`}
        </tspan>
      </text>
      <text
        x={cx}
        y={cy + 40}
        fill="#9B9EAC"
        textAnchor="middle"
        dominantBaseline="central"
        className="recharts-text recharts-label"
      >
        <tspan
          alignmentBaseline="middle"
          fontSize="16"
          fontWeight={500}
          fontFamily="Roboto"
        >
          {`objectif`}
        </tspan>
      </text>
    </>
  );
}

class ScoreChart extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <>
        <div
          style={{
            position: "absolute",
            marginTop: 6,
            marginLeft: 8,
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          Score
        </div>
        <ResponsiveContainer debounce={0} width={"99%"}>
          <RadialBarChart
            innerRadius="100%"
            outerRadius="85%"
            data={[
              {
                name: "score",
                // score: 1,
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
              label={<CustomLabel value1={"lol"} value2={"lol"} />}
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

export default ScoreChart;
