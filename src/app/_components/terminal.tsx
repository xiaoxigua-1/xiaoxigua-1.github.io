import Image from "next/image";
import { PiStudentFill, PiCodeBold } from "react-icons/pi";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import Link from "next/link";

const links = [
  {
    link: "https://github.com/xiaoxigua",
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
  return (
    <div className="w-full max-w-[1000px] flex p-10 mx-auto">
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
      <div className="flex-1 flex items-center pt-3 px-8 flex-col">
        <div className="flex justify-center h-10 items-center relative max-w-[482px] w-full">
          <span className="w-full h-[2px] bg-white mr-5 before:absolute before:-left-4 before:h-4 before:w-4 before:rounded-tl-lg before:border-white before:border-l-2 before:border-t-2" />
          <span className="text-4xl font-bold">xiaoxigua</span>
          <span className="w-full h-[2px] bg-white ml-5 before:absolute before:-right-4 before:h-4 before:w-4 before:rounded-tr-lg before:border-white before:border-r-2 before:border-t-2" />
        </div>
        <p className="mt-5 text-xl">Hello, I'm xiaoxigua</p>
        <div className="flex items-center mt-3">
          <div className="icon-tip text-blue-300 before:content-['Student'] before:bg-blue-300 hover:before:w-[83px]">
            <PiStudentFill size={30} />
          </div>
          <div className="icon-tip text-red-300 before:content-['Frontend/Backend'] before:bg-red-300 hover:before:w-[163px]">
            <PiCodeBold size={30} />
          </div>
        </div>
        <div className="relative max-w-[482px] w-full mt-5">
          <span className="w-full block h-[2px] bg-white before:absolute before:-left-4 before:h-4 before:w-4 before:rounded-tl-lg before:border-white before:border-l-2 before:border-t-2 after:absolute after:-right-4 after:h-4 after:w-4 after:rounded-tr-lg after:border-white after:border-r-2 after:border-t-2" />
        </div>
        <div className="flex items-center mt-5">
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
  );
}
