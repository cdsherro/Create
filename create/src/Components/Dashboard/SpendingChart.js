import React from 'react';

const accentGreen = '#86C6A0'; 
const darkGray = '#333333';

// Main Component
export default function SpendingChart() {
  return (
    // Card styling 
    <div className="bg-white p-4 rounded-xl shadow-lg h-full border border-gray-100 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Spending vs Income</h3>
      
      {/* Container for the placeholder to maintain card height */}
      <div className="flex-grow w-full flex items-center justify-center">
        <div
          style={{
            // Placeholder box styling
            backgroundColor: '#F0F0F0', // Light gray background for the graph area
            border: `1px dashed ${accentGreen}`,
            width: '100%',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: darkGray,
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          Line Chart Placeholder (Data to be integrated later)
        </div>
      </div>
    </div>
  );
}