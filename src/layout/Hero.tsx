import Carousel from "../components/Carousel";

// Images
import img1 from "../assets/images/img1.webp";

export default function Hero() {
  const IMG_HEIGHT = 222;

  const slides = [
    {
      title: "Apartamento",
      img: img1,
    },
    {
      title: "Apartamento",
      img: img1,
    },
    {
      title: "Apartamento",
      img: img1,
    },
    {
      title: "Apartamento",
      img: img1,
    },
    {
      title: "Apartamento",
      img: img1,
    },
    {
      title: "Apartamento",
      img: img1,
    },
  ];

  return (
    <main className="mt-[100px] min-h-[calc(100vh-100px)] px-5 pb-20 sm:px-0">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl text-balance sm:w-1/2 sm:text-start">
          Aproveite ao máximo o seu negócio de viagens e hospitalidade com
          soluções personalizadas e consultoria especializada que proporcionam
          resultados mensuráveis.
        </h2>
      </div>

      <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center">
        {/* Ticket */}
        <div className="relative top-0 z-[2] me-5 w-full scale-120 sm:w-1/3 sm:px-3 xl:w-1/5">
          <div className="bg-primary relative left-1.5 w-full rounded-2xl">
            <p className="font-secundary px-3 py-2 text-2xl text-white">
              Melhore seu
            </p>
          </div>

          <div className="bg-primary relative left-1.5 w-full rounded-2xl px-3 py-4">
            {/* Carousel */}
            <div className="w-full rounded-2xl">
              <Carousel
                slides={slides}
                type="text"
                className="mb-2 w-full"
                slidesPerView={[1, 1, 1]}
                textColor="white"
              />
              <Carousel
                slides={slides}
                type="img"
                imgHeight={IMG_HEIGHT}
                slidesPerView={[1, 1, 1]}
                className=""
              />
            </div>
          </div>

          <div className="bg-primary relative left-1.5 w-full rounded-2xl">
            <p className="font-secundary px-3 py-2 text-2xl text-white">
              Melhore seu
            </p>
          </div>
        </div>

        {/* Carousel Background */}
        <div className="absolute -z-[1] w-full">
          <Carousel
            slides={slides}
            type="text"
            className="mb-2 bg-white"
            background={true}
            slidesPerView={[1, 3, 5]}
          />
          <Carousel
            slides={slides}
            type="img"
            imgHeight={IMG_HEIGHT}
            background={true}
            slidesPerView={[1, 3, 5]}
          />
        </div>
      </div>
    </main>
  );
}
