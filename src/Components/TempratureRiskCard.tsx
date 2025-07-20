import IndicatorCard from "./Common/IndicatorCard";
import { Flame, HelpCircle, LightbulbIcon, Thermometer } from "lucide-react";
import { CircularTimeChart } from "./Charts/CircularTimeChart";

function TempratureRiskCard() {
  return (
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
          value={20}
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
  );
}

export default TempratureRiskCard;
