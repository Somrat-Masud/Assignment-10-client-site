import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/campaigns/")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  }, []);
  // Implement update functionality

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/myCampaign/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("data deleted success");
        }

        const reaming = campaigns.filter((campaign) => campaign._id !== _id);
        setCampaigns(reaming);
      })
      .catch((error) => {
        console.error("Error deleting campaign:", error);
      });

    console.log("this is a deleted", _id);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Campaigns</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border">
              <td className="border px-4 py-2">{campaign.name}</td>
              <td className="border px-4 py-2">{campaign.title}</td>
              <td className="border px-4 py-2">{campaign.type}</td>
              <td className="border px-4 py-2">{campaign.deadline}</td>
              <td className="border px-4 py-2">
                <Link
                  to={`/updateCampaign/${campaign._id}`}
                  className="bg-blue-500 text-white px-3 py-1 mr-2 rounded"
                >
                  Update
                </Link>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(campaign._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;

// export default MyCampaign;
