import Barchart from "../components/charts/Barchart";
import PieChart from "../components/charts/PieChart";
import AreaChart from "../components/charts/AreaChart";
import RedarChart from "../components/charts/RedarChart";
import LinesChart from "../components/charts/LinesChart";
import MultiCharts from "../components/charts/MultiCharts";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";

function Dashboard() {
  return (
    <div className="p-8">
      <br />
      <h2 className="block mb-2 font-medium text-gray-900 dark:text-white text-center text-2xl lg:text-3xl">
        Dashboard
      </h2>
      <div className="grid gap-4 mb-1 sm:grid-cols-2">
        <div>
          <Barchart />
        </div>
        <div>
          <LinesChart />
        </div>
        <div>
          <HorizontalBarChart />
        </div>
        <div>
          <MultiCharts />
        </div>
        <div>
          <AreaChart />
        </div>
        <div>
          <div className="w-[60%] mx-auto">
            <PieChart />
          </div>
        </div>
        <div>
          <div className="w-[60%] mx-auto">
            <RedarChart />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Dashboard;
