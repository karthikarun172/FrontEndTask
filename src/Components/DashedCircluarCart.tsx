import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type DashedChartProps = {
  value?: number;
  max?: number;
  text?: string;
  color?: string;
  iconBottom?: React.ReactNode;
};

export function DashedCircleChart({
  value = 90,
  max = 100,
  text = "4:30 hrs",
  color = "#ec4899",
  iconBottom,
}: DashedChartProps) {
  return (
    <div className="w-44 h-44 dashed-circular relative flex items-center justify-center">
      <CircularProgressbarWithChildren
        value={value}
        maxValue={max}
        strokeWidth={10}
        circleRatio={0.9}
        styles={buildStyles({
          pathColor: color,
          trailColor: "#fde8ef",
          strokeLinecap: "round",
          rotation: 0.5,
        })}
      >
        <span className="text-2xl font-bold text-gray-700">{text}</span>
      </CircularProgressbarWithChildren>
      <span className="absolute left-1/2 bottom-6 -translate-x-1/2">
        {iconBottom}
      </span>
    </div>
  );
}
