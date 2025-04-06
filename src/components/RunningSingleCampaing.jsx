import { useLoaderData } from "react-router-dom";

const RunningSingleCampaing = () => {
  const campaign = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-lg shadow mb-10 ">
      <h2 className="text-3xl font-bold mb-4">{campaign.name}</h2>
      <p className="text-lg font-semibold mb-2">{campaign.title}</p>
      Type: {campaign.type || "Type not available"}
      <p>Minimum Donation: ${campaign.minDonation}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
      <p className="mt-4">{campaign.description}</p>
    </div>
  );
};

export default RunningSingleCampaing;
