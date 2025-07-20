import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Heart } from "lucide-react";

const heartData = [
  { time: "06:00", value: 40 },
  { time: "09:00", value: 90 },
  { time: "12:00", value: 128 },
  { time: "18:00", value: 170 },
  { time: "20:00", value: 80 },
  { time: "23:00", value: 45 },
];

export function HeartRateChart() {
  return (
    <div className="w-full flex bg-gray-50 rounded flex-col h-full items-center justify-center">
      <h2 className="text-sm font-semibold text-gray-800 mb-10 ">
        Tachycardia Alert{" "}
        <span className="inline-block w-4 h-4 text-xs bg-pink-100 text-pink-600 rounded-full text-center ml-1">
          ?
        </span>
      </h2>

      <div className="w-full flex items-center justify-around">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 text-pink-500">
            <Heart className="w-4 h-4" />
            <span className="text-2xl font-bold text-black">128 bpm</span>
          </div>
          <span className="text-xs text-pink-500">↑ 12 bpm</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-400">45 bpm</span>
          <span className="text-xs text-pink-500">↓ 5 bpm</span>
        </div>
      </div>

      <div className="w-full h-24 my-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={heartData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: "#999" }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#999" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 200]}
              width={30}
            />

            <Tooltip
              wrapperStyle={{ outline: "none" }}
              contentStyle={{ fontSize: "12px", borderRadius: "6px" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ec4899"
              fill="url(#colorPink)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="text-[12px] text-gray-600 border bg-white  rounded-md px-3 py-1 text-center w-full mt-2">
        🕒 Rest 2+ hours and avoid intense tasks.
      </div>
    </div>
  );
}
