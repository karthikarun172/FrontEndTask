// Dashboard.tsx
import { useState } from "react";
import AlertCard from "../Components/AlertCard";
import IndicatorCard from "../Components/IndicatorCard";
import { HeartRateChart } from "../Components/HeartRateChart";
import { CircularTimeChart } from "../Components/CircularTimeChart";
import {
  Heart,
  Thermometer,
  AudioLines,
  AlertTriangle,
  HelpCircle,
  Flame,
  Volume2,
} from "lucide-react";

const AlertDataJson = [
  {
    heading: "6 Potential Indicators of Fatigue",
    detail: "Immediate Intervention needed. Notify office,hydrate & lie down",
    type: "alert",
  },
  {
    heading: "2 Non-Confirmity Issues",
    detail:
      "You may be overworked or low on rest. Take breaks and prioritize recovery to stay alert",
    type: "alarm",
  },
];

function Dashboard() {
  const [alertData] = useState(AlertDataJson);

  return (
    <div className="bg-gray-50 min-h-screen p-3">
      <div className="mb-4">
        {alertData.map((item) => (
          <AlertCard
            heading={item.heading}
            detail={item.detail}
            type={item.type}
            key={item.heading}
          />
        ))}
      </div>

      <div className="flex flex-row  justify-center items-start">
        <IndicatorCard icon={<Heart className="w-4 h-4" />} title="HEART RISK">
          <HeartRateChart />
        </IndicatorCard>

        <IndicatorCard
          status="MODERATE"
          icon={<Thermometer className="w-5 h-5" />}
          title="TEMPERATURE RISK"
        >
          <div className="bg-yellow-50 w-full rounded-2xl flex flex-col items-center pt-4 pb-2">
            <div className="font-semibold text-gray-700 mb-2 text-center flex items-center gap-1">
              Exposure to High Heat
              <HelpCircle className="w-4 h-4 text-yellow-300" />
            </div>
            <CircularTimeChart
              value={40}
              max={100}
              color="#f59e42"
              text="1:30 hrs"
              iconBottom={<Flame className="w-6 h-6 text-yellow-400" />}
              dashed={false}
              circleRatio={0.9}
              rotation={0.55}
            />
          </div>
          <div className="bg-white border border-yellow-100 rounded-lg shadow-sm px-2 py-2 flex items-start gap-2 w-full mt-2">
            <HelpCircle className="w-4 h-4 mt-0.5 text-yellow-400" />
            <span className="text-xs text-gray-700">
              Take a 15-minute break in shade. Drink 500 ml water
            </span>
          </div>
        </IndicatorCard>

        <IndicatorCard
          title="NOISE INDEX"
          status="CRITICAL"
          updated="5 mins ago"
          icon={<Volume2 className="w-4 h-4 text-pink-500" />}
        >
          <div className="bg-pink-50 w-full rounded-2xl flex flex-col items-center pt-4 pb-2">
            <div className="font-semibold text-gray-700 mb-2 text-center flex items-center gap-1">
              Exposure to Extreme noise
              <HelpCircle className="w-4 h-4 text-pink-300" />
            </div>
            <CircularTimeChart
              value={60}
              max={100}
              color="#ec4899"
              text="4:30 hrs"
              dashed={true}
              iconBottom={<AudioLines className="w-6 h-6 text-pink-200" />}
              circleRatio={0.82}
              rotation={0.5}
            />
          </div>
          <div className="bg-white border border-pink-100 rounded-lg shadow-sm px-2 py-2 flex items-start gap-2 w-full mt-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 text-pink-500" />
            <span className="text-xs text-gray-700">
              Rotate off loud zones. Enforce quiet breaks.
              <br />
              Check PPE fit
            </span>
          </div>
        </IndicatorCard>
      </div>
    </div>
  );
}

export default Dashboard;
