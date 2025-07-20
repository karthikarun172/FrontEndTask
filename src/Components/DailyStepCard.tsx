import React from "react";
import IndicatorCard from "./Common/IndicatorCard";
import { Footprints } from "lucide-react";
import { CircularTimeChart } from "./Charts/CircularTimeChart";

function DailyStepCard() {
  return (
    <IndicatorCard
      icon={<Footprints className="w-5 h-5" />}
      title="DAILY STEPS"
    >
      <CircularTimeChart
        text={`5689 Steps`}
        value={60}
        max={100}
        color="blue"
      />
    </IndicatorCard>
  );
}

export default DailyStepCard;
