type StepData = {
  day: string;
  steps: number | null;
  goal?: number;
};

const WEEKLY_GOAL = 6000;

const weeklySteps: StepData[] = [
  { day: "Mon", steps: 3490 },
  { day: "Tue", steps: 6897 },
  { day: "Wed", steps: 6000, goal: WEEKLY_GOAL },
  { day: "Thu", steps: 1245 },
  { day: "Fri", steps: 3490 },
  { day: "Sat", steps: 3490 },
  { day: "Sun", steps: null },
];

export function WeeklyStepsChart() {
  return (
    <div className="w-full">
      <div className="space-y-2">
        {weeklySteps.map(({ day, steps, goal }) => {
          const percentage = steps
            ? Math.min((steps / (goal || WEEKLY_GOAL)) * 100, 100)
            : 0;
          const isGoalMet = steps !== null && steps >= (goal || WEEKLY_GOAL);

          return (
            <div key={day} className="text-sm text-gray-700">
              <div className="flex justify-between mb-1">
                <span>{day}</span>
                <span
                  className={`${
                    isGoalMet ? "text-green-600 font-semibold" : ""
                  }`}
                >
                  {steps !== null ? steps : "-"}{" "}
                  {isGoalMet && <span className="ml-1">✔</span>}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isGoalMet ? "bg-green-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
