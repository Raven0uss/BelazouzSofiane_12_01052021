import React from "react";
import { ResponsiveContainer, LineChart, XAxis, Line, Tooltip } from "recharts";

const CustomTooltip = ({ payload, active }) => {
  if (active && payload && payload.length) {
    return (
      <>
        <div className="sessions-tooltip">
          <p>{payload[0].value}min</p>
        </div>
      </>
    );
  }
  return null;
};

class SessionsChart extends React.Component {
  constructor(props) {
    super(props);

    this.days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };
  }

  render() {
    return (
      <>
        <div className="sessions-title">Durée moyenne des sessions</div>
        <ResponsiveContainer debounce={0} width={"99%"}>
          <LineChart
            // width={500}
            // height={300}
            data={this.props.sessions}
            margin={{
              top: 50,
              right: 0,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff80" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              interval={0}
              padding={{ left: 15, right: 15 }}
              tickFormatter={(value) => this.days[value]}
              stroke="#ffffff80"
              tickMargin={10}
              fontFamily="Roboto"
              fontSize="15px"
              fontWeight="500"
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              // stroke="#ffffff80"
              strokeWidth={2}
              dot={false}
              stroke="url(#colorUv)"
            />
            <Tooltip
              cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 1 }}
              content={<CustomTooltip />}
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default SessionsChart;
