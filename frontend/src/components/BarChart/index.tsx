"use client";
import dynamic from "next/dynamic";
import "chart.js/auto";
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

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
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: { color: "green", beginAtZero: true },
        },
        x: {
          ticks: { color: "red", beginAtZero: true },
        },
      },
    },
  };

  return (
    <S.Wrapper>
      <h1>Historical Population</h1>
      <Bar id="chart" data={data} />
    </S.Wrapper>
  );
};

export default BarChart;
