import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/crowd") //
      .then((res) => res.json())
      .then((data) => {
        const currentDate = new Date();
        const activeCampaigns = data.filter(
          (campaign) => new Date(campaign.deadline) > currentDate
        );
        setCampaigns(activeCampaigns.slice(0, 6));
      })
      .catch((error) => console.error("Error fetching campaigns:", error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Running Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{campaign.name}</h3>
            <p className="text-gray-600">{campaign.title}</p>
            <p className="text-gray-500 capitalize">Type: {campaign.type}</p>
            <p className="text-gray-500">
              Deadline: {new Date(campaign.deadline).toLocaleDateString()}
            </p>
            <Link to={`/runnignCampaings/${campaign._id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
