import { useContext } from "react";
import { ThemeContext } from "../../theme";
import WindowState, { WindowStateObj } from "../window/windowState";

interface DockProps {
  states: WindowState[];
  setStates: ((...state: WindowStateObj[]) => void)[];
}

export default function Dock({ states, setStates }: DockProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="group w-80 h-80 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div
        className={`w-20 h-20 group-hover:w-32 group-hover:h-32 rounded-full opacity-50 group-hover:opacity-90 transition-[width,height,opacity] bg-[--${theme}-bg-color]`}
      >
        {states.map((_, index) => (
          <div
            key={index}
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
            className={`w-20 h-20 rounded-full absolute top-1/4 left-0 rotate-0 group-hover:rotate-[calc(var(--index)*45deg)] group-hover:origin-[160px] origin-center opacity-0 group-hover:opacity-100 transition-all delay-[calc(var(--index)*0.1s)] duration-100 translate-x-[100px] group-hover:translate-x-0 bg-[--${theme}-bg-color]`}
          />
        ))}
      </div>
    </div>
  );
}
