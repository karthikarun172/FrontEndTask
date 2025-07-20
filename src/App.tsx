import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Layout/Sidebar";

function App() {
  return (
    <div className="relative">
      <Sidebar />
      <div className="pl-[220px]">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
