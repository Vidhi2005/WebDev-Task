import { BellIcon, ClockIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import PP from "../assets/pp.png"
const DashboardHead = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center"> 
        <button className="p-2 rounded-full hover:bg-gray-100 mr-2"> 
          <Bars3Icon className="h-6 w-6" /> 
        </button>
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-6 w-6" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ClockIcon className="h-6 w-6" />
        </button>
        <div className="flex items-center">
          <img
            src={PP} 
            alt="Profile"
            className="rounded-full h-8 w-8 mr-2"
          />
          <div className="flex items-center"> 
            <div>
              <p className="text-sm font-semibold">Student</p>
              <p className="text-xs text-gray-500">Aditya Sengupta</p>
            </div>
            <button className="p-1 rounded-full hover:bg-gray-100 ml-2"> 
              <ChevronDownIcon className="h-4 w-4" /> 
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHead;
