import { useLoaderData } from "react-router-dom";

const DetailsPages = () => {
  const loader = useLoaderData();
  console.log(loader);

  const campaigns = Array.isArray(loader) ? loader : [loader];
  // const handleAddSecion = (id) => {
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(id),
  //   });
  // };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Details Pages</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
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
                <td className="border p-3">
                  {campaign.deadline
                    ? new Date(campaign.deadline).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="border p-3 text-center">
                  <button
                    // onClick={() => handleAddSecion()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  >
                    Donate Now
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

export default DetailsPages;
