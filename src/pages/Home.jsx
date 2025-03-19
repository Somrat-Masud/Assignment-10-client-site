import AboutUs from "../components/AboutUs";
import BannerSlider from "../components/BannerSlider ";
import CausesCategory from "../components/CausesCategory";
import RunningCampaigns from "../components/RunningCampaigns";

const Home = () => {
  return (
    <div>
      <section>
        {/* {banner} */}
        <BannerSlider></BannerSlider>
      </section>

      <section>
        {/* {Running Campaign Section} */}
        <RunningCampaigns></RunningCampaigns>
      </section>
      <section>
        <div className="bg-gray-100 ">
          <AboutUs></AboutUs>
        </div>
      </section>
      <section>
        <CausesCategory></CausesCategory>
      </section>
    </div>
  );
};

export default Home;
