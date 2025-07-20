import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Layout/Sidebar";

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <div className="pl-[260px]">
        {" "}
        {/* 220px width + 40px left spacing (left-5 = 20px) + padding */}
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
