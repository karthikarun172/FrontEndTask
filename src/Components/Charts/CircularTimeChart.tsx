import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CircularTimeChartProps = {
  value: number;
  max: number;
  color: string;
  text?: string;
  iconBottom?: React.ReactNode;
  dashed?: boolean;
  circleRatio?: number;
  rotation?: number;
};

export function CircularTimeChart({
  value,
  max,
  color,
  text,
  iconBottom,
  dashed,
  circleRatio,
  rotation,
}: CircularTimeChartProps) {
  return (
    <div
      className={`w-44 h-44 mx-auto relative flex items-center justify-center${
        dashed ? " dashed-circular" : ""
      }`}
    >
      <CircularProgressbarWithChildren
        value={value}
        maxValue={max}
        circleRatio={circleRatio}
        styles={buildStyles({
          pathColor: color,
          trailColor: "#fde6ee",
          strokeLinecap: "round",
          rotation,
        })}
      >
        <div className="text-xl font-semibold text-gray-700">{text}</div>
      </CircularProgressbarWithChildren>
      <span className="absolute left-1/2 -bottom-1 -translate-x-1/2">
        {iconBottom}
      </span>
    </div>
  );
}
