import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { gsap } from "gsap";

interface NavItemProps {
  text: string;
  link: string;
}

export default function NavItem({ text, link }: NavItemProps) {
  const lineLinkRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    gsap.to(lineLinkRef.current, {
      scaleX: isHovered ? 1 : 0,
      transformOrigin: isHovered ? "left" : "right",
      duration: 0.4,
      ease: "power2.out",
    });
  }, [isHovered]);

  return (
    <li className="flex gap-5 text-lg text-white">
      <a
        href={link}
        key={text}
        className="relative flex cursor-pointer items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        <span
          ref={lineLinkRef}
          className="absolute -bottom-0.5 left-0 h-[1px] w-full origin-right scale-x-0 rounded-full bg-white"
        ></span>
      </a>
    </li>
  );
}
