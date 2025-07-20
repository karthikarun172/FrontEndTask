import { useState } from "react";
import AlertCard from "../Components/AlertCard";
import { PersonStandingIcon } from "lucide-react";
import HeaderBar from "../Components/Layout/HeaderBar";
import NoiseIndexCard from "../Components/NoiseIndexCard";
import TempratureRiskCard from "../Components/TempratureRiskCard";
import HeartRiskCard from "../Components/HeartRiskCard";
import DailyStepCard from "../Components/DailyStepCard";
import WeeklyStepTrendCard from "../Components/WeeklyStepTrendCard";
import OpenSpaceTimeCard from "../Components/OpenSpaceTimeCard";
import AlertData from "../Utils/AlertData.json";

function Dashboard() {
  const [alertData] = useState(AlertData);

  return (
    <div className="p-4  md:p-6 xl:p-8">
      <HeaderBar />
      <div className="w-full h-[1px] bg-gray-200 shadow-sm my-4" />

      {alertData.length > 0 && (
        <>
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
        </>
      )}

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Overview</h2>

        <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700 font-medium shadow-sm">
          <button className="px-2 text-lg hover:bg-gray-200 rounded-full">
            &lt;
          </button>
          <span className="px-2">Today</span>
          <button className="px-2 text-lg hover:bg-gray-200 rounded-full">
            &gt;
          </button>
        </div>
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
            <HeartRiskCard />
            <TempratureRiskCard />
            <NoiseIndexCard />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2 mb-4  ">
            <PersonStandingIcon className="text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Activity Indicators
            </h2>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            <DailyStepCard />
            <WeeklyStepTrendCard />
            <OpenSpaceTimeCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
