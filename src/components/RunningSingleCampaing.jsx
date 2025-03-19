import { useLoaderData } from "react-router-dom";

const RunningSingleCampaing = () => {
  const loader = useLoaderData();
  console.log(loader);

  const campaigns = Array.isArray(loader) ? loader : [loader];

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningSingleCampaing;
