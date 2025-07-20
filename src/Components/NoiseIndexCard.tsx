import React from "react";
import IndicatorCard from "./Common/IndicatorCard";
import { AlertTriangle, AudioLines, HelpCircle } from "lucide-react";
import { CircularTimeChart } from "./Charts/CircularTimeChart";

function NoiseIndexCard() {
  return (
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
  );
}

export default NoiseIndexCard;
