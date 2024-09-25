import React from 'react';

const GraphCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-1/2 ">
      <h3 className="text-xl text-gray-400 font-bold m-8 justify-center items-center flex">Student Personality Assessment</h3>
      <div className="flex gap-20">
        <div className="w-1/5 h-64 flex flex-col">
          <div className="text-sm text-gray-900 font-semibold mb-4">Introverted</div>
          <div className="bg-purple-500 h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-full" style={{ height: '70%' }}></div>
          </div>
          <div className="text-sm text-gray-900 font-semibold mt-4">Extroverted</div>
        </div>
        <div className="w-1/5 h-64 flex flex-col">
          <div className="text-sm text-gray-900 font-semibold mb-4">Observant</div>
          <div className="bg-purple-500 h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-full" style={{ height: '30%' }}></div>
          </div>
          <div className="text-sm text-gray-900 font-semibold mt-4">Intutive</div>
        </div>
        <div className="w-1/5 h-64 flex flex-col">
          <div className="text-sm text-gray-900 font-semibold mb-4">Feeling</div>
          <div className="bg-purple-500 h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-full" style={{ height: '40%' }}></div>
          </div>
          <div className="text-sm text-gray-900 font-semibold mt-4">Thinking</div>
        </div>
        <div className="w-1/5 h-64 flex flex-col">
          <div className="text-sm text-gray-900 font-semibold mb-4">Prospecting</div>
          <div className="bg-purple-500 h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-full" style={{ height: '50%' }}></div>
          </div>
          <div className="text-sm text-gray-900 font-semibold mt-4">Judging</div>
        </div>
        <div className="w-1/5 h-64 flex flex-col">
          <div className="text-sm text-gray-900 font-semibold mb-4">Terbulent</div>
          <div className="bg-purple-500 h-full rounded-lg overflow-hidden">
            <div className="bg-gray-200 h-full" style={{ height: '20%' }}></div>
          </div>
          <div className="text-sm text-gray-900 font-semibold mt-4">Assertive</div>
        </div>

      </div>
    </div>
  );
};

export default GraphCard;