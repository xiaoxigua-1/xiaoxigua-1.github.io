import { useContext } from "react";
import { ThemeContext } from "@/app/theme";
import Image from "next/image";

export default function Terminal() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full flex p-10">
      <div className="w-44 h-44 rounded-full overflow-hidden before:absolute before:-inset-y-2 bg-[#162052] before:inset-x-14 relative after:absolute after:rounded-full after:inset-1 before:bg-gradient-to-t before:from-[#00ccff] before:to-[#d400d4] before:animate-[spin_5s_linear_infinite]">
        <div className="w-full h-full z-10 absolute inset-1">
          <Image
            className="rounded-full overflow-hidden"
            src="/avatar.jpg"
            alt="avatar"
            width={168}
            height={168}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center pt-3 px-8">
        <div className="flex justify-center w-full h-10 items-center">
          <span className="w-full h-[2px] bg-white mr-3" />
          <span
            className="text-4xl text-transparent font-bold"
            style={{
              WebkitTextStroke: `1px var(--${theme}-text-color)`,
            }}
          >
            xiaoxigua
          </span>
          <span className="w-full h-[2px] bg-white ml-3" />
        </div>
      </div>
    </div>
  );
}
