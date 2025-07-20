import IndicatorCard from "./Common/IndicatorCard";
import { Heart } from "lucide-react";
import { HeartRateChart } from "./Charts/HeartRateChart";

function HeartRiskCard() {
  return (
    <IndicatorCard
      icon={<Heart className="w-5 h-5" />}
      title="HEART RISK"
      status="HIGH"
    >
      <HeartRateChart />
    </IndicatorCard>
  );
}

export default HeartRiskCard;
