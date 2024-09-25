import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHead";
import TabbedNavigation from "./components/TabbedNavigation";
import userImage from "./assets/pp.png";
import ScoreCards from "./components/ScoreCards";
import GraphCard from "./components/GraphCard";
import CareerOptionsCard from "./components/CareerOptionsCard"; 

const App = () => {
  const careerOptions = [
    "Data Scientist",
    "Software Developer",
    "Financial Advisor",
    "Systems Architect",
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 p-8 bg-white rounded-l-3xl shadow-md">
          <DashboardHeader userName="Aditya Sengupta" userImage={userImage} />
          <TabbedNavigation />
          <ScoreCards />
          <div className="flex justify-evenly mt-20 "> 
            <GraphCard /> 
            <CareerOptionsCard options={careerOptions} /> 
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;