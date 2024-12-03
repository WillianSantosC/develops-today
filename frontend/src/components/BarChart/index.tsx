"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export type BarChartDataProps = {
  year: number;
  value: number;
};

type BarChartProps = {
  population: BarChartDataProps[];
};

import * as S from "./styles";

const BarChart = ({ population }: BarChartProps) => {
  const data = {
    labels: population.map((data) => data.year),
    datasets: [
      {
        label: "Population",
        data: population.map((data) => data.value),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: "#FAFAFA", beginAtZero: true },
      },
      x: {
        ticks: { color: "#FAFAFA", beginAtZero: true },
      },
    },
  };

  return (
    <S.Wrapper>
      <h1>Historical Population</h1>
      <Bar
        aria-label="Historical Population Chart"
        role="img"
        id="chart"
        data={data}
        options={options}
      />
    </S.Wrapper>
  );
};

export default BarChart;
