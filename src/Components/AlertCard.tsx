import { Clock as AlertCircle, BookAlert } from "lucide-react";

type CardDetailsProps = {
  heading?: string;
  detail?: string;
  type?: string;
};

function AlertCard({ heading, detail, type }: CardDetailsProps) {
  return (
    <div
      data-testid="alert-card"
      className={`w-full flex items-center justify-between rounded-xl p-4 bg-gray-50 mx-auto mt-2 border ${
        type === "alert"
          ? "animate-border-pulse border-pink-500"
          : "border-gray-50"
      }`}
    >
      <div className="flex items-center gap-4">
        {type === "alert" ? (
          <div className="bg-pink-500 rounded-lg p-2 flex items-center justify-center animate-border-pulse">
            <BookAlert className="text-white w-6 h-6 zoom-animation animate-border-pulse" />
          </div>
        ) : (
          <div className="bg-pink-200 rounded-lg p-2 flex items-center justify-center">
            <AlertCircle className="text-pink-600 w-6 h-6 " />
          </div>
        )}
        <div className="text-left">
          <h2 className="font-semibold text-lg text-gray-900 leading-tight">
            {heading}
          </h2>
          <span className="block text-xs text-gray-500 mt-0.5">{detail}</span>
        </div>
      </div>

      {type === "alert" ? (
        <div className="relative">
          <select
            className="appearance-none border border-gray-200 px-3 py-1 pr-7 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            defaultValue="show"
          >
            <option value="show">Show details</option>
            <option value="new">New details</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 text-xs">
            ▼
          </span>
        </div>
      ) : (
        <div>
          <button className="appearance-none border border-gray-200 px-3 py-1 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">
            View issue
          </button>
        </div>
      )}
    </div>
  );
}

export default AlertCard;
