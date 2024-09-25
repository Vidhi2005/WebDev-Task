
import React, { useState } from 'react';

const TabbedNavigation = () => {
  const [activeTab, setActiveTab] = useState('my-data');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-navigation mt-6">
      <nav className="tabs flex"> 
        <ul className="flex space-x-10 text-gray-600 text-sm font-medium"> 
          <li
            className={`cursor-pointer pb-2  ${activeTab === 'my-data' ? 'border-b-2 border-black text-black font-bold text-xl' : 'text-xl'}`} 
            onClick={() => handleTabChange('my-data')}
          >
            My Data
          </li>
          <li
            className={`cursor-pointer pb-2 ${activeTab === 'roadmap' ? 'border-b-2 border-black text-black font-bold text-xl' : 'text-xl'}`} 
            onClick={() => handleTabChange('roadmap')}
          >
            Roadmap
          </li>
          <li
            className={`cursor-pointer pb-2 ${activeTab === 'edit-profile' ? 'border-b-2 border-black text-black font-bold text-xl' : 'text-xl'}`} 
            onClick={() => handleTabChange('edit-profile')}
          >
            Edit Profile
          </li>
        </ul>
      </nav>
      <div className="tab-content mt-8"> 
        
      </div>
    </div>
 );
};

export default TabbedNavigation;