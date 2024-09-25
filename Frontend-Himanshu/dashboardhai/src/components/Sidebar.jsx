import { Link } from "react-router-dom";
import { CogIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { UserIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside
      className="bg-gradient-to-b from-[#1c1d38] to-[#270202da] text-white w-64 p-6 h-screen" 
    >
      <h2 className="text-3xl font-bold mb-10">Counsel.ai</h2>
      <div className="flex flex-col justify-around h-full   gap-52 -mt-10">
      <div className="flex">
        <ul className="space-y-8 flex-1"> 
          <li>
            <Link to="/" className="flex items-center hover:text-gray-300">
              <HomeIcon className="h-6 w-6 mr-4" />
              Dashboard
            </Link>
          </li>

          <hr className="border-t border-gray-700 my-4" /> 

          <li>
            <Link to="/tests" className="flex items-center hover:text-gray-300">
              <ChartBarIcon className="h-6 w-6 mr-4" />
              Home
            </Link>
          </li>

          <hr className="border-t border-gray-700 my-4" /> 

          <li>
            <Link to="/results" className="flex items-center hover:text-gray-300">
              <DocumentTextIcon className="h-6 w-6 mr-4" /> 
              Resources
            </Link>
          </li>

          <hr className="border-t border-gray-700 my-4" /> 

          <li>
            <Link to="/profile" className="flex items-center hover:text-gray-300">
              <UserIcon className="h-6 w-6 mr-4" />
              How this works
            </Link>
          </li>
          
          <hr className="border-t border-gray-700 my-4" /> 

          <li>
            <Link to="/profile" className="flex items-center hover:text-gray-300">
              <UserIcon className="h-6 w-6 mr-4" />
              About
            </Link>
          </li>

          <hr className="border-t border-gray-700 my-4" /> 
        </ul>
        </div>
        <div className="flex">
          <li>
            <Link to="/settings" className="flex items-center hover:text-gray-300">
              <CogIcon className="h-6 w-6 mr-4" />
              Settings
            </Link>
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;