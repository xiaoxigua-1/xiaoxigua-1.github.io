import { useContext } from "react";
import { ThemeContext } from "../../theme";
import { WindowContainer } from "../../windowContainer";

interface DockProps {
  windowContainer: WindowContainer;
}

export default function Dock({ windowContainer }: DockProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="group w-80 h-80 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none">
      <div
        className={`lg:w-20 lg:h-20 w-32 h-32 group-hover:w-32 group-hover:h-32 rounded-full lg:opacity-50 opacity-90 group-hover:opacity-90 transition-[width,height,opacity] bg-[--${theme}-bg-color]`}
      >
        {windowContainer.allStates.map((state, index) => (
          <div
            key={index}
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
            onClick={() =>
              windowContainer.setState(
                index,
                {
                  minmize: state.close
                    ? false
                    : !windowContainer.getState(index).minmize,
                },
                { close: false },
              )
            }
            className={`w-20 h-20 rounded-full absolute top-1/4 left-0 lg:rotate-0 group-hover:rotate-[calc(var(--index)*45deg)] rotate-[calc(var(--index)*45deg)] group-hover:origin-[160px] origin-[160px] lg:origin-center lg:opacity-0 opacity-100 group-hover:opacity-100 transition-all delay-[calc(var(--index)*0.1s)] duration-100 lg:translate-x-[100px] translate-x-0 group-hover:translate-x-0 bg-[--${theme}-bg-color] flex items-center justify-center cursor-pointer`}
          >
            {state.icon}
          </div>
        ))}
      </div>
    </div>
  );
}