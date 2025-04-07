import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import swal from "sweetalert";

const UpdateCampaignPage = () => {
  const loaderUser = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmitUpdated = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const type = form.type.value;
    const minDonation = form.minDonation.value;
    const image = form.image.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const UpdatedData = {
      name,
      email,
      title,
      type,
      minDonation,
      image,
      deadline,
      description,
    };
    console.log(loaderUser);
    fetch(
      `https://server-side-oozs4kotv-somrat-masuds-projects.vercel.app/myCampaign/${loaderUser._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UpdatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // reset();
        if (data.modifiedCount > 0) {
          swal("Updated Successfully");
        }
      });
  };
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">
        Updated New Campaign
      </h2>
      <form onSubmit={handleSubmitUpdated} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">User Name:</label>
          <input
            type="text"
            name="name"
            value={user.displayName}
            className="w-full p-2 border rounded-lg"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">User Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Campaign Title:</label>
          <input
            type="text"
            name="title"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block text-sm font-medium">Campaign Type:</label>
          <select
            name="type"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Minimum Donation Amount:
          </label>
          <input
            type="number"
            name="minDonation"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium">Image URL:</label>
          <input
            type="text"
            name="image"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Deadline */}
        <div>
          <label className="block text-sm font-medium">Deadline:</label>
          <input
            type="date"
            name="deadline"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Campaign Title */}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description:</label>
          <textarea
            name="description"
            required
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Minimum Donation */}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Updated Campaign
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaignPage;
