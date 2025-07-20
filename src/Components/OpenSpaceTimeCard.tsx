import IndicatorCard from "./Common/IndicatorCard";
import { DoorOpen } from "lucide-react";
import { CircularTimeChart } from "./Charts/CircularTimeChart";

function OpenSpaceTimeCard() {
  return (
    <IndicatorCard
      icon={<DoorOpen className="w-5 h-5" />}
      title="OPEN SPACE TIME"
    >
      <CircularTimeChart text="5689" value={60} max={100} color="blue" />
    </IndicatorCard>
  );
}

export default OpenSpaceTimeCard;
