import React from "react";
import IndicatorCard from "./Common/IndicatorCard";
import { ChartBar } from "lucide-react";
import { WeeklyStepsChart } from "./Charts/WeeklyStepChart";

function WeeklyStepTrendCard() {
  return (
    <IndicatorCard
      icon={<ChartBar className="w-5 h-5" />}
      title="WEEKLY STEPS TREND"
    >
      <WeeklyStepsChart />
    </IndicatorCard>
  );
}

export default WeeklyStepTrendCard;
