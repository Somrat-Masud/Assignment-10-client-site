import React from "react";
import { useNavigate } from "react-router-dom";

const campaigns = [
  { id: 1, name: "Campaign 1", startDate: "2025-03-01", endDate: "2025-03-15" },
  { id: 2, name: "Campaign 2", startDate: "2025-04-01", endDate: "2025-04-20" },
  { id: 3, name: "Campaign 3", startDate: "2025-05-01", endDate: "2025-05-30" },
];

const CampaignTable = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Campaigns</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Start Date</th>
            <th className="border border-gray-300 p-2">End Date</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="text-center">
              <td className="border border-gray-300 p-2">{campaign.name}</td>
              <td className="border border-gray-300 p-2">
                {campaign.startDate}
              </td>
              <td className="border border-gray-300 p-2">{campaign.endDate}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => navigate(`/campaigns/${campaign.id}`)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  See More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
