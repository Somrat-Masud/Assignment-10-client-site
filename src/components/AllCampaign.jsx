import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // fetch("http://localhost:5000/crowd")
    fetch(
      "http://localhost:5000/campaigns"
    )
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error("Error fetching campaigns:", err));
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">All Campaigns</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-white ">
              <th className="border p-3">Name</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Deadline</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="hover:bg-gray-100">
                <td className="border p-3">{campaign.name}</td>
                <td className="border p-3">{campaign.title}</td>
                <td className="border p-3 capitalize">{campaign.type}</td>
                <td className="border p-3">{campaign.deadline}</td>
                <td className="border p-3 text-center">
                  <button
                    onClick={() => navigate(`/allCampaign/${campaign._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    See More
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
export default AllCampaigns;
