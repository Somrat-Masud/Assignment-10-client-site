import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://server-side-oozs4kotv-somrat-masuds-projects.vercel.app/myDonations/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setDonations(data));
    }
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Donations</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation._id} className="bg-white shadow-md rounded-xl p-4">
            <img
              src={donation.image}
              alt={donation.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{donation.title}</h3>
            <p className="text-gray-600">Amount: ${donation.amount}</p>
            <p className="text-gray-500 text-sm">
              Date: {new Date(donation.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
