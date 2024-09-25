
import React from "react";

const ScoreCards = () => {
  const scores = [
    { title: "Aptitude Score", score: 85, color: "blue" },
    { title: "Personality Type", score: "INTJ", color: "green" },
    { title: "Learning Type", score: "Visual", color: "yellow" },
    { title: "Completion", score: "45%", color: "yellow" },
    { title: "Account Type", score: "Student", color: "yellow" },
  ];

  return (
    <div className="flex justify-around mt-8">
      {scores.map((score, index) => (
        <div
          key={index}
          className={`bg-${score.color}-500 p-4 rounded-xl shadow-xl w-64 h-40 flex flex-col justify-center  mt-5 gap-4`}
        >
          <h2 className="text-gray-500 text-lg font-semibold">{score.title}</h2>
          <h1 className="text-black text-4xl font-semibold">{score.score}</h1>
        </div>
      ))}
    </div>
  );
};

export default ScoreCards;