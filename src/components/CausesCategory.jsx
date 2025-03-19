import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const categories = [
  {
    title: "Self-employment",
    imgUrl: "https://i.ibb.co.com/bR3JZwmC/download-3.jpg",
  },
  { title: "Education", imgUrl: "https://i.ibb.co.com/LXFJyYc5/download.jpg" },
  { title: "Nonprofit", imgUrl: "https://i.ibb.co.com/3ykzWdRm/download.png" },
  {
    title: "Environment",
    imgUrl: "https://i.ibb.co.com/r21rd29b/download-2.jpg",
  },
  { title: "Medical", imgUrl: "https://i.ibb.co.com/LDv71Wt0/download-1.jpg" },
  { title: "Animals", imgUrl: "https://i.ibb.co.com/8nd4byBF/download-4.jpg" },
  {
    title: "Creative",
    imgUrl: "https://i.ibb.co.com/mCvVgMtV/download-5.jpg",
  },
  { title: "Memorial", imgUrl: "https://i.ibb.co.com/cczKB3DN/download-6.jpg" },
  {
    title: "Community Development",
    imgUrl: "https://i.ibb.co.com/LDv71Wt0/download-1.jpg",
  },
];

const CausesCategory = () => {
  return (
    <div className="text-center mt-14 ">
      <h2 className="text-3xl font-bold">
        <span className="text-blue-500">Causes</span>{" "}
        <span className="bg-red-400 text-white px-3 py-1 rounded ">
          Category
        </span>
      </h2>

      <div className="  pt-14">
        <Swiper
          className="flex justify-center space-y-12"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index} className="text-center">
              <div className=" rounded-full ">
                <img
                  src={cat.imgUrl}
                  alt={cat.title}
                  className="w-24 h-24 rounded-full mx-auto"
                />
              </div>
              <p className="mt-2 font-semibold">{cat.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

    // <Swiper
    //   // install Swiper modules
    //   modules={[Pagination]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log("slide change")}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
  );
};

export default CausesCategory;
