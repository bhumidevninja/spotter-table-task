import { BarChart, axisClasses } from "@mui/x-charts";
import { FC, useMemo } from "react";

import {
  aggregateData,
  entityTypeCollection,
  transformToFormattedData,
} from "../utils/helpers";

const DataChart: FC<any> = ({ originalData }) => {
  const chartData = useMemo(
    () =>
      transformToFormattedData(
        aggregateData(originalData),
        entityTypeCollection(originalData)
      ),
    [originalData.length]
  );

  debugger;
  return (
    <BarChart
      dataset={chartData}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "month",
          label: "Month",
        },
      ]}
      yAxis={[{ label: "Count" }]}
      series={Object.keys(chartData[0] || {})
        .filter((key) => key !== "month")
        .map((key) => ({
          dataKey: key,
          label: key,
          color: "#02B2AF",
        }))}
      slotProps={{
        legend: {
          hidden: true,
          labelStyle: {
            fontSize: 12,
            display: "none",
          },
        },
      }}
      leftAxis={{
        labelStyle: {
          fontSize: 14,
        },
        tickLabelStyle: {
          fontSize: 12,
        },
      }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: "translateX(-10px)",
        },
        border: "1px solid rgba(255,255,255, 0.1)",
        backgroundImage: `linear-gradient(rgba(255,255,255, 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)`,
        backgroundSize: "35px 35px",
        backgroundPosition: "20px 20px, 20px 20px",
      }}
      height={500}
    />
  );
};

export default DataChart;
