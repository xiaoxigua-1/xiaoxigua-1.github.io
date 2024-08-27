import { useState, useEffect } from "react";
import Image from "next/image";
import { PiStudentFill, PiCodeBold } from "react-icons/pi";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaDiscord, FaCheck } from "react-icons/fa6";
import { GrArchlinux } from "react-icons/gr";
import { TiHome } from "react-icons/ti";
import Link from "next/link";

const links = [
  {
    link: "https://github.com/xiaoxigua-1",
    name: "GitHub",
    icon: <FaGithub size="100%" />,
  },
  {
    link: "https://x.com/XiguaXiao",
    name: "X",
    icon: <FaXTwitter size="100%" />,
  },
  {
    link: "https://t.me/xiao_xigua",
    name: "Telegram",
    icon: <FaTelegramPlane size="100%" />,
  },
  {
    link: "https://discord.com/users/458988300418416640",
    name: "Discord",
    icon: <FaDiscord size="100%" />,
  },
];

export default function Terminal() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="w-full max-w-[1000px] flex p-10 mx-auto items-center after:absolute after:w-4 after:h-6 after:-translate-x-4 after:translate-y-3 after:border-l-[2px] after:border-y-[2px] after:rounded-l-md before:content-['neofetch'] before:absolute before:translate-y-6 before:translate-x-2 relative">
        <div className="flex select-none">
          <div className="h-5 px-2 bg-white text-black flex items-center">
            <GrArchlinux />
          </div>
          <span className="w-0 h-0 border-y-transparent border-l-white border-y-[10px] border-l-[10px] border-solid bg-blue-500" />
          <div className="h-5 px-2 bg-blue-500 flex items-center">
            <TiHome size={20} />
            <p>~</p>
          </div>
          <span className="w-0 h-0 border-y-transparent border-l-blue-500 border-y-[10px] border-l-[10px] border-solid" />
        </div>
        <span className="border-dotted border-t-[3px] flex-1 border-gray-300" />
        <div className="flex">
          <span className="w-0 h-0 border-y-transparent border-r-black border-y-[10px] border-r-[10px] border-solid" />
          <div className="h-5 px-2 bg-black flex items-center text-green-400">
            <FaCheck size={10} />
          </div>
          <span className="w-0 h-0 border-y-transparent border-r-white border-y-[10px] border-r-[10px] border-solid bg-black" />
          <span className="h-5 flex px-2 items-center bg-white text-black text-sm">
            {time.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="w-full max-w-[1000px] flex lg:p-10 p-0 mx-auto flex-wrap justify-center">
        <div className="w-44 h-44 rounded-full overflow-hidden before:absolute before:-inset-y-2 bg-[#162052] before:inset-x-14 relative after:absolute after:rounded-full after:inset-1 before:bg-gradient-to-t before:from-[#00ccff] before:to-[#d400d4] before:animate-[spin_5s_linear_infinite] select-none">
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
        <div className="flex-1 flex items-center pt-3 px-8 flex-col">
          <div className="flex justify-center h-10 items-center relative max-w-[482px] w-full">
            <span className="w-full h-[2px] bg-white mr-5 before:absolute before:-left-4 before:h-4 before:w-4 before:rounded-tl-lg before:border-white before:border-l-2 before:border-t-2" />
            <span className="text-4xl font-bold">xiaoxigua</span>
            <span className="w-full h-[2px] bg-white ml-5 before:absolute before:-right-4 before:h-4 before:w-4 before:rounded-tr-lg before:border-white before:border-r-2 before:border-t-2" />
          </div>
          <p className="mt-5 text-xl">Hello, I'm xiaoxigua</p>
          <div className="flex items-center mt-3 select-none">
            <div className="icon-tip text-blue-300 before:content-['Student'] before:bg-blue-300 hover:before:w-[83px] before:pointer-events-none">
              <PiStudentFill size={30} />
            </div>
            <div className="icon-tip text-red-300 before:content-['Frontend/Backend'] before:bg-red-300 hover:before:w-[163px] before:pointer-events-none">
              <PiCodeBold size={30} />
            </div>
          </div>
          <div className="relative max-w-[482px] w-full mt-5">
            <span className="w-full block h-[2px] bg-white before:absolute before:-left-4 before:h-4 before:w-4 before:rounded-tl-lg before:border-white before:border-l-2 before:border-t-2 after:absolute after:-right-4 after:h-4 after:w-4 after:rounded-tr-lg after:border-white after:border-r-2 after:border-t-2" />
          </div>
          <div className="flex items-center mt-5 select-none">
            {links.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                target="_blank"
                className="w-12 h-12 group mx-3 flex flex-col items-center"
              >
                <div className="group-hover:scale-75 group-hover:-translate-y-3 w-12 h-12 transition-[transform,opacity]">
                  {item.icon}
                </div>
                <p className="group-hover:opacity-100 opacity-0 translate-y-0 group-hover:-translate-y-3 transition-transform font-bold">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
