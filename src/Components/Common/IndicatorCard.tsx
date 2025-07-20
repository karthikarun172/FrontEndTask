import React from "react";

type IndicatorCardProps = {
  title: string;
  status?: string;
  updated?: string;
  children?: React.ReactNode;
  icon: React.ReactNode;
};

function IndicatorCard({
  title,
  status,
  updated = "5 mins ago",
  children,
  icon,
}: IndicatorCardProps) {
  const handleStatue = (status?: string) => {
    if (status === "HIGH") return "bg-pink-100 text-pink-600";
    if (status === "MODERATE") return "bg-yellow-100 text-yellow-600";
    if (status === "CRITICAL") return "bg-pink-600 text-white";
    return "";
  };

  return (
    <div
      className={`w-full h-auto min-h-[22rem]  bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col gap-4 ${
        status === "CRITICAL"
          ? "animate-border-pulse animated-gradient-border-inner"
          : ""
      }  `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-1 text-xs font-semibold text-gray-500">
          {icon}
          {title}
        </span>
        <span
          className={`px-2 py-0.5 rounded-md text-xs font-semibold ${handleStatue(
            status
          )}`}
        >
          {status}
        </span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center min-h-[130px]">
        {children || <span className="text-gray-300">[Your content here]</span>}
      </div>

      <div className="text-center mt-auto">
        <span className="text-[11px] text-gray-400">Updated {updated}</span>
      </div>
    </div>
  );
}

export default IndicatorCard;
