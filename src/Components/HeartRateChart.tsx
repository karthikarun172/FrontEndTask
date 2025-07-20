import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const heartData = [
  { time: "06:00", value: 90 },
  { time: "12:00", value: 128 },
  { time: "18:00", value: 170 },
  { time: "23:00", value: 100 },
];

export function HeartRateChart() {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <AreaChart data={heartData}>
        <defs>
          <linearGradient id="colorPink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#ec4899"
          fill="url(#colorPink)"
          strokeWidth={2}
        />
        <XAxis dataKey="time" hide />
        <YAxis hide />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
