// Components/HeaderBar.tsx
import { Bell, Sun, Download } from "lucide-react";

const HeaderBar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-3  text-sm">
      {/* Left: Greeting */}
      <div className="flex items-center gap-2">
        <Sun className="text-yellow-400 w-5 h-5" />
        <div className="flex text-left flex-col leading-tight">
          <span className="font-semibold text-sm text-gray-800">
            Good morning,
          </span>
          <span className="text-xs text-gray-500">
            Captain Daniel Alacantra
          </span>
        </div>
        <div className="ml-4 px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium text-xs">
          DAY 22 AT SEA
        </div>
      </div>

      {/* Center: Ship & Status */}
      <div className="flex items-center gap-4">
        <div className="border-l h-6"></div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-gray-800">
            MV Northern Star
          </span>
          <span className="text-[11px] text-gray-400">IMO : 928502875</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs">
          <Download className="w-3 h-3" />
          SAILING
        </div>
        <span className="text-xs text-gray-600">12/05/2025</span>
        <span className="text-xs text-gray-400">12 : 24 : 45 UTC</span>
      </div>

      {/* Right: Notification */}
      <div className="relative  p-2">
        <Bell className="w-4 h-4 text-gray-700" />
      </div>
    </div>
  );
};

export default HeaderBar;
