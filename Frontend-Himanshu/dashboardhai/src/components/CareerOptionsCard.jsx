import React from 'react';

const CareerOptionsCard = ({ options }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-500 justify-center items-center">Career Options</h3>
      <ul className="space-y-2">
        {options.map((option, index) => (
          <li key={index} className="text-black font-semibold text-xl hover:text-green-600 hover:cursor-pointer">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerOptionsCard;