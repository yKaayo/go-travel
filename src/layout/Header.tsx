import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Icons
import RightArrow from "../assets/icons/RightArrow.js";
import { useRef, useState } from "react";

// Components
import NavItems from "../components/NavItems.js";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const iconAnimRef = useRef(null);
  const textAnimRef = useRef(null);

  const [startAnimBtn, setStartAnimBtn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  window.addEventListener("resize", () => setIsMobile(window.innerWidth < 640));

  const navLinkTexts = [
    { text: "Serviços", link: "#" },
    { text: "Sobre", link: "#" },
    { text: "Projetos", link: "#" },
    { text: "Blogs", link: "#" },
  ];

  useGSAP(() => {
    gsap.to(textAnimRef.current, {
      x: startAnimBtn ? -15 : 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(iconAnimRef.current, {
      x: startAnimBtn ? -15 : -3,
      duration: 0.6,
      opacity: startAnimBtn ? 1 : 0,
      ease: "power2.out",
    });
  }, [startAnimBtn]);

  return (
    <header className="fixed top-5 z-[1] w-full">
      <div className="container mx-auto flex h-[60px] items-center gap-2 sm:gap-3">
        <button className="bg-primary flex h-full items-center justify-center rounded-xl px-3 sm:px-5">
          <h1 className="text-lg font-semibold text-white sm:text-2xl">
            GoTravel
          </h1>
        </button>

        <nav className="bg-primary flex h-full w-full items-center justify-end rounded-xl">
          <ul className="flex gap-5 px-5 text-lg text-white">
            {navLinkTexts.map((link) => (
              <NavItems key={link.text} text={link.text} link={link.link} />
            ))}
          </ul>
        </nav>

        <button
          onMouseOver={() => setStartAnimBtn(true)}
          onMouseLeave={() => setStartAnimBtn(false)}
          className="bg-primary relative flex h-full cursor-pointer items-center rounded-xl px-5 py-1 sm:px-10"
        >
          <p ref={textAnimRef} className="font-semibold text-white sm:text-lg">
            Entrar
          </p>
          <div
            ref={iconAnimRef}
            style={{ opacity: 0 }}
            className="absolute right-0 h-2/5"
          >
            <RightArrow className="fill-white" />
          </div>
        </button>
      </div>
    </header>
  );
}
