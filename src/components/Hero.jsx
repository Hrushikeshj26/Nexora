import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const slides = [
  { title: "OnePlus", model: "12 | R", image: "/images/Oneplus12.jpg" },
  { title: "iPhone", model: "16 | Pro | Max", image: "/images/iPhone16pro.jpg" },
  { title: "Samsung", model: "S25 | FE | Ultra", image: "/images/SamsungS25Ultra.jpg" },
  { title: "Xiaomi", model: "12 | 12 Pro", image: "/images/Xiomi12.jpg" },
];

function Hero() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [message, setMessage] = useState([]);

  const showMessage = (item) => {
    const msg = `${item.title} ${item.model}`;
    setMessage([item.title, item.model])
    toast.success(`Please select ${msg} from products if avilable, this is only a banner 😄`)
  };
  

  return (
    <Swiper
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      loop={true}
      className="w-full h-[60vh] md:h-[80vh] my-30 md:my-10"
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-[70%] md:h-full flex  items-center justify-center gap-8 relative px-6">

            <div className="max-w-7xl absolute w-full h-full flex items-center justify-between md:top-0">

              {/* DESKTOP IMAGE */}
              <div className="hidden md:flex w-full h-full items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-4xl object-contain ${activeIndex === index ? "drop-shadow-xl animate-zoomIn" : ""} `}
                />
              </div>

              {/* TEXT */}
              <div className="flex relative md:top-0 top-50 flex-col gap-3 z-20 w-full md:w-1/2 items-center text-(--color-text-main)">
                <h1 className={`text-4xl md:text-7xl font-bold uppercase ${activeIndex === index ? "animate-slideUp opacity-100" : "opacity-0"}`}>{item.title}
                </h1>

                <h2 className={`text-2xl md:text-4xl font-semibold uppercase ${activeIndex === index ? "animate-slideUp delay-150 opacity-100" : "opacity-0"}`}>{item.model}</h2>

                <button className={`relative overflow-hidden border-2 border-(--color-border) px-6 py-2 text-lg md:text-xl uppercase font-semibold w-fit rounded-lg transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-(--color-secondary) before:-z-10 before:transition-all before:duration-300 hover:before:w-full ${activeIndex === index ? "animate-slideUp delay-300 opacity-100" : "opacity-0"}`}
                onClick={() => showMessage(item)}
                >Shop Now</button>
              </div>
            </div>

            {/* MOBILE IMAGE */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:hidden flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-[55vh] object-contain drop-shadow-xl animate-zoomIn"
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
