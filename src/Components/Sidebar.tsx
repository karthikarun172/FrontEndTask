// Components/Sidebar.tsx
import React from "react";
import {
  LayoutGrid,
  Activity,
  Clock4,
  AlertTriangle,
  User,
  Settings,
  Watch,
  BatteryMedium,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-auto h-screen bg-gray-100 border-r rounded-xl border-gray-200 flex flex-col justify-between fixed left-5 top-5">
      {/* Top Section: Logo and Device Info */}
      <div>
        <div className="p-4">
          <h1 className="text-xl font-bold text-[#fd3c6a]">SOL✕</h1>
          <div className="mt-4 p-3 bg-white rounded-xl border border-gray-200 flex flex-col  shadow-sm">
            <div className="flex items-center ">
              <Watch className="w-5 h-5 text-gray-700" />
              <div>
                <p className="text-xs font-semibold text-gray-700">
                  DEVICE CONNECTED
                </p>
                <p className="text-[10px] text-gray-400">
                  02/04/2025, 13:12:45
                </p>
              </div>
            </div>
            <div className="ml-auto mt-1">
              <div className="text-[11px] bg-green-500 text-white px-2 py-0.5 rounded font-bold">
                <BatteryMedium />
                85%
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-4 px-4">
          <NavItem icon={<LayoutGrid className="w-4 h-4" />} label="Overview" />
          <NavItem icon={<Activity className="w-4 h-4" />} label="Health" />
          <NavItem
            icon={<Clock4 className="w-4 h-4" />}
            label="Work Rest Hours"
          />
          <NavItem
            icon={<AlertTriangle className="w-4 h-4" />}
            label="Non-Conformities"
            badge="4"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2 px-4 pb-6">
        <NavItem icon={<User className="w-4 h-4" />} label="Profile" />
        <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
      </div>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: string;
}) => (
  <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 cursor-pointer text-sm text-gray-700 font-medium">
    <div className="flex items-center gap-3">
      {icon}
      {label}
    </div>
    {badge && (
      <span className="bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </div>
);

export default Sidebar;
