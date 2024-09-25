import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Settings, Home, FileText, HelpCircle, Info, Bell, Menu, X } from 'lucide-react';

const personalityData = [
  { name: 'Extroverted', value: 50 },
  { name: 'Intuitive', value: 40 },
  { name: 'Thinking', value: 70 },
  { name: 'Judging', value: 45 },
  { name: 'Assertive', value: 55 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (action) => {
    console.log(`Clicked: ${action}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-purple-900 text-white p-6 fixed md:static h-full z-50`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Counsel.ai</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="space-y-4">
            <li onClick={() => handleClick('Dashboard')} className="flex items-center space-x-2 bg-purple-800 p-2 rounded cursor-pointer hover:bg-purple-700"><Settings size={20} /> <span>Dashboard</span></li>
            <li onClick={() => handleClick('Home')} className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-800"><Home size={20} /> <span>Home</span></li>
            <li onClick={() => handleClick('Resources')} className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-800"><FileText size={20} /> <span>Resources</span></li>
            <li onClick={() => handleClick('How this works')} className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-800"><HelpCircle size={20} /> <span>How this works</span></li>
            <li onClick={() => handleClick('About')} className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-purple-800"><Info size={20} /> <span>About</span></li>
          </ul>
        </nav>
        <div className="absolute bottom-6 left-6">
          <button onClick={() => handleClick('Settings')} className="p-2 rounded hover:bg-purple-800">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4 md:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button onClick={() => handleClick('Top Settings')} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <Settings size={20} />
            </button>
            <button onClick={() => handleClick('Notifications')} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <button onClick={() => handleClick('User Menu')} className="hidden md:inline hover:underline">
                Student ▼
              </button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <ul className="flex space-x-4 overflow-x-auto">
            <li onClick={() => handleClick('Roadmap')} className="font-semibold cursor-pointer hover:text-purple-600 whitespace-nowrap">Roadmap</li>
            <li onClick={() => handleClick('My Data')} className="font-semibold text-purple-600 border-b-2 border-purple-600 cursor-pointer whitespace-nowrap">My Data</li>
            <li onClick={() => handleClick('Edit Profile')} className="font-semibold cursor-pointer hover:text-purple-600 whitespace-nowrap">Edit Profile</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {[
            { title: 'Aptitude Score', value: '147' },
            { title: 'Personality Type', value: 'INTJ' },
            { title: 'Learning Type', value: 'Visual' },
            { title: 'Completion', value: '45%' },
            { title: 'Account Type', value: 'Student' },
          ].map((item, index) => (
            <button key={index} onClick={() => handleClick(item.title)} className="bg-white p-4 rounded shadow text-left hover:shadow-md transition-shadow">
              <h3 className="text-sm text-gray-500">{item.title}</h3>
              <p className="text-xl md:text-2xl font-bold">{item.value}</p>
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex-1 bg-white p-4 md:p-6 rounded shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Student Personality Assessment</h2>
            <div className="h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={personalityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full lg:w-64 bg-white p-4 md:p-6 rounded shadow">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Career Options</h2>
            <ul className="space-y-2">
              {['Data Scientist', 'Software Developer', 'Financial Advisor', 'Systems Architect'].map((career, index) => (
                <li 
                  key={index} 
                  onClick={() => handleClick(`Career: ${career}`)} 
                  className={`cursor-pointer hover:text-purple-600 ${index === 1 ? 'text-green-500' : ''}`}
                >
                  {career}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;