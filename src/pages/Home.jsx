import AboutUs from "../components/AboutUs";
import BannerSlider from "../components/BannerSlider ";
import CausesCategory from "../components/CausesCategory";
import RunningCampaigns from "../components/RunningCampaigns";
import { Typewriter } from "react-simple-typewriter";
const Home = () => {
  return (
    <div>
      <section>
        <div className="text-center font-bold text-4xl p-4">
          <Typewriter />
        </div>
        <BannerSlider></BannerSlider>
      </section>

      <section>
        {/* {Running Campaign Section} */}
        <RunningCampaigns></RunningCampaigns>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <CausesCategory></CausesCategory>
      </section>
    </div>
  );
};

export default Home;
