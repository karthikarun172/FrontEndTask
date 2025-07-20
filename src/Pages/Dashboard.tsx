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
  LightbulbIcon,
  Footprints,
  ChartBar,
  DoorOpen,
  PersonStandingIcon,
} from "lucide-react";
import HeaderBar from "../Components/HeaderBar";

const AlertDataJson = [
  {
    heading: "6 Potential Indicators of Fatigue",
    detail: "Immediate Intervention needed. Notify office,hydrate & lie down",
    type: "alert",
  },
  {
    heading: "2 Non-Conformity Issues",
    detail:
      "You may be overworked or low on rest. Take breaks and prioritize recovery to stay alert",
    type: "alarm",
  },
];

function Dashboard() {
  const [alertData] = useState(AlertDataJson);

  return (
    <div className="min-h-screen p-4 md:p-6 xl:p-8">
      <HeaderBar />
      <div className="w-full h-[1px] bg-gray-200 shadow-sm my-4" />

      <div className="space-y-4 mb-6">
        {alertData.map((item) => (
          <AlertCard
            key={item.heading}
            heading={item.heading}
            detail={item.detail}
            type={item.type}
          />
        ))}
      </div>

      <div className="w-full h-[1px] bg-gray-200 shadow-sm mb-6" />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
        <div className="text-gray-600">Today</div>
      </div>
      <div className="bg-gray-50 pl-2 pr-2 pt-10 rounded-xl ">
        <section>
          <div className="flex items-center gap-2 mb-4  ">
            <PersonStandingIcon className="text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Health Indicators
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <IndicatorCard
              icon={<Heart className="w-5 h-5" />}
              title="HEART RISK"
            >
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
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm px-3 py-2 flex items-start gap-2 w-full max-w-xs mt-2">
                  <LightbulbIcon className="w-5 h-5 mt-1.5 text-yellow-400" />
                  <span className="text-xs text-left text-gray-700">
                    Take a 15-minute break in shade. Drink 500 ml water
                  </span>
                </div>
              </div>
            </IndicatorCard>

            <IndicatorCard
              title="NOISE INDEX"
              status="CRITICAL"
              updated="5 mins ago"
              icon={<AudioLines className="w-5 h-5 text-pink-500" />}
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
                  // iconBottom={<AudioLines className="w-6 h-6 text-pink-200" />}
                  circleRatio={0.82}
                  rotation={0.5}
                />
                <div className="bg-white border border-pink-100 rounded-lg shadow-sm px-3 py-2 flex items-start gap-2 w-full max-w-xs mt-2">
                  <AlertTriangle className="w-5 h-5 mt-1 text-pink-500" />
                  <span className="text-xs text-left text-gray-700">
                    Rotate off loud zones. Enforce quiet breaks. Check PPE fit
                  </span>
                </div>
              </div>
            </IndicatorCard>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Activity Indicator
          </h2>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <IndicatorCard
              icon={<Footprints className="w-5 h-5" />}
              title="DAILY STEPS"
            >
              <CircularTimeChart
                text="5689"
                value={60}
                max={100}
                color="blue"
              />
            </IndicatorCard>

            <IndicatorCard
              icon={<ChartBar className="w-5 h-5" />}
              title="WEEKLY STEPS TREND"
            >
              <CircularTimeChart
                text="5689"
                value={60}
                max={100}
                color="blue"
              />
            </IndicatorCard>

            <IndicatorCard
              icon={<DoorOpen className="w-5 h-5" />}
              title="OPEN SPACE TIME"
            >
              <CircularTimeChart
                text="5689"
                value={60}
                max={100}
                color="blue"
              />
            </IndicatorCard>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
