import React from "react";

const AboutUs = () => {
  return (
    <section className=" mx-auto  py-12 flex pb-14 ">
      <div className="w-6/12 text-left md:text-left">
        <h2 className="text-4xl font-bold text-teal-500">
          About{" "}
          <span className="bg-red-400 text-white px-2 py-1 rounded">Us</span>
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed text-2xl">
          Oporajoy is Asia's most trusted and visited crowdfunding platform.
          This crowdfunding website was established in 2017. Oporajoy is a
          charity-based peer-to-peer crowdfunding platform with the slogan
          <strong> "We believe in humanity"</strong>. Due to various
          adversities, Oporajoy crowdfunding has not yet spread in Bangladesh.
          However, it is expected to be widespread soon...
        </p>
      </div>

      {/* Stats Section */}
      <div className="w-6/12 grid md:grid-cols-2 gap-6 mt-8 ml-4">
        {/* Card */}
        <div className="border p-6 rounded-lg text-center shadow-md">
          <div className="text-red-500 text-4xl">❤️</div>
          <h3 className="text-3xl font-bold text-red-500">1+</h3>
          <p className="text-gray-600">Made Happy</p>
        </div>

        <div className="border p-6 rounded-lg text-center shadow-md">
          <div className="text-green-500 text-4xl">👨‍👩‍👧</div>
          <h3 className="text-3xl font-bold text-green-500">0+</h3>
          <p className="text-gray-600">Total Volunteer</p>
        </div>

        <div className="border p-6 rounded-lg text-center shadow-md">
          <div className="text-pink-500 text-4xl">🏆</div>
          <h3 className="text-3xl font-bold text-pink-500">0+</h3>
          <p className="text-gray-600">Awards Won</p>
        </div>

        <div className="border p-6 rounded-lg text-center shadow-md">
          <div className="text-purple-500 text-4xl">🐷</div>
          <h3 className="text-3xl font-bold text-purple-500">1+</h3>
          <p className="text-gray-600">Donation Completed</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
