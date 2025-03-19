const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold">Crowdfund</h2>
            <p className="mt-2">Funding with impact</p>
            <div className="mt-4">
              <span className="bg-white text-blue-900 px-2 py-1 rounded">
                Certified B Corporation
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-lg font-semibold">Investing</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Investment opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fees
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tax relief
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  B Corp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center border-t border-white pt-4">
          <p>&copy; 2025 Crowdfund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
