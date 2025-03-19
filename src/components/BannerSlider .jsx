const BannerSlider = () => {
  return (
    <section>
      <div className="carousel w-full h-[420px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/mVS2NMdy/IMG-20241222-WA0018-600x337.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex justify-between items-center px-5">
            <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/VYyVVRhC/b43795c0292d86f0dbecf47d22cffdd0446f42fd709e508d.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex justify-between items-center px-5">
            <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/gMMxbczm/bb-1735559210.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 3"
          />
          <div className="absolute inset-0 flex justify-between items-center px-5">
            <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-gray-800 text-white">
              ❯
            </a>
          </div>
        </div>

        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/fzCQnWkc/BRAC-UNIVERSITY-01.webp"
            className="w-full h-full object-cover rounded-lg"
            alt="Slide 4"
          />
          <div className="absolute inset-0 flex justify-between items-center px-5">
            <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
