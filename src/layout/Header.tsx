import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

// Icons
import RightArrow from "../assets/icons/RightArrow.js";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function Header(): JSX.Element {
  const iconAnimRef = useRef(null);
  const textAnimRef = useRef(null);
  const [startAnim, setStartAnim] = useState(false);

  useGSAP(() => {
    if (startAnim) {
      gsap.to(textAnimRef.current, { x: -15, duration: 0.6 });
      gsap.to(iconAnimRef.current, { x: -15, duration: 0.6, opacity: 1 });
    } else {
      gsap.to(textAnimRef.current, { x: 0, duration: 0.8 });
      gsap.to(iconAnimRef.current, { x: -3, duration: 0.8, opacity: 0 });
    }
  }, [startAnim]);

  return (
    <header className="fixed top-5 container mx-auto flex h-[60px] w-full items-center justify-between">
      <h1 className="bg-primary">GoTravel</h1>
      <button
        onMouseOver={() => setStartAnim(true)}
        onMouseLeave={() => setStartAnim(false)}
        className="bg-primary relative flex h-full cursor-pointer items-center px-10 py-1 font-semibold text-lg"
      >
        <p ref={textAnimRef}>Entrar</p>
        <div
          ref={iconAnimRef}
          style={{ opacity: 0 }}
          className="absolute right-0 h-3/5"
        >
          <RightArrow className="" />
        </div>
      </button>
    </header>
  );
}
