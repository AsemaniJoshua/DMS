import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    date: '3/2/2025',
    type: 'Financial Support',
    beneficiary: 'Kwame Asante',
    assessment: 'Assessed',
  },
  {
    date: '3/12/2025',
    type: 'Assistive Devices',
    beneficiary: 'Akosua Mensah',
    assessment: 'Assessed',
  },
  {
    date: '8/24/2025',
    type: 'Assistive Devices',
    beneficiary: 'Adwoa Dora',
    assessment: 'Not Assessed',
  },
];

const AssistanceTracking = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = data.filter(
    (entry) =>
      entry.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.beneficiary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dark text-white p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8 bg-gray-800 p-6 rounded-lg">
        <div>
          <h2 className="text-2xl font-bold mb-2">Assistance Tracking</h2>
          <p className="text-gray-400">Log and manage assistance provided to PWDS</p>
        </div>
        <button
          onClick={() => navigate('/admin-dashboard/log-assistance')}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          + Log New Assistance
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="p-4 text-left font-semibold">Date</th>
              <th className="p-4 text-left font-semibold">Assistance Type</th>
              <th className="p-4 text-left font-semibold">Beneficiaries</th>
              <th className="p-4 text-left font-semibold">Assessment</th>
              <th className="p-4 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((entry, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-gray-700 transition duration-150">
                <td className="p-4 font-medium">{entry.date}</td>
                <td className="p-4 font-medium">{entry.type}</td>
                <td className="p-4 font-medium">{entry.beneficiary}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      entry.assessment === 'Assessed' 
                        ? 'bg-green-600 text-green-100' 
                        : 'bg-gray-600 text-gray-100'
                    }`}
                  >
                    {entry.assessment}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => navigate(`/admin-dashboard/view-assistance/${idx}`)}
                    className="text-white hover:text-purple-300 transition duration-200 p-2 hover:bg-gray-600 rounded-full"
                  >
                    👁️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssistanceTracking;

