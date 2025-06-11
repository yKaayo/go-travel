import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  title: string;
  img: string;
}

interface Slides {
  slides: Slide[];
  type: "img" | "text";
  className?: string;
  imgHeight?: number;
  background?: boolean;
  slidesPerView: number[];
  textColor?: string;
}

export default function Carousel({
  slides,
  type,
  className = "",
  imgHeight,
  background = false,
  slidesPerView,
  textColor = "black",
}: Slides) {
  return (
    <div className={`w-full ${className}`}>
      {background && (
        <div className="absolute inset-0 z-[2] h-full w-full bg-white/40"></div>
      )}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        loop={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: slidesPerView[0] },
          640: { slidesPerView: slidesPerView[1] },
          1280: { slidesPerView: slidesPerView[2] },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {type === "img" && slide.img ? (
              <img
                style={{ height: `${imgHeight}px` }}
                src={slide.img}
                alt={slide.title}
                className="w-full object-cover"
              />
            ) : (
              <h3
                className="text-2xl font-semibold text-gray-800"
                style={{ color: `${textColor}` }}
              >
                {slide.title}
              </h3>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
