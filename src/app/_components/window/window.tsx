import { useContext, useState } from "react";
import AppBar from "./appBar";
import WindowState, { WindowStateObj } from "./windowState";
import { ThemeContext } from "@/app/theme";
import dynamic from "next/dynamic";

const WindowComp = dynamic(() => Promise.resolve(Window), {
  ssr: false,
});

const window: globalThis.Window | { innerWidth: number; innerHeight: number } =
  typeof global.window !== "undefined"
    ? global.window
    : { innerWidth: 800, innerHeight: 600 };

interface WindowProps {
  state: WindowState;
  setState: (...obj: WindowStateObj[]) => void;
  content?: JSX.Element;
  zIndex: number;
}

export interface WindowInterface {
  state: WindowState;
  setState: (...obj: WindowStateObj[]) => void;
  children?: JSX.Element;
  zIndex: number;
  setZIndex: (zIndex: number) => void;
}

export function createWindowState(
  title: string,
  icon?: JSX.Element,
  width: number = 800,
  height: number = 600,
  x: number = window.innerWidth / 2 - 400,
  y: number = window.innerHeight / 2 - 300,
): WindowInterface {
  const [state, setState] = useState<WindowState>({
    title,
    icon,
    x,
    y,
    width,
    height,
    resizeEvent: null,
    move: null,
    minmize: false,
    maximize: window.innerWidth < 800,
    close: false,
  });
  const [zIndex, setZIndex] = useState(0);
  const setStateHandle = (...obj: WindowStateObj[]) => {
    setState(Object.assign({ ...state }, ...obj));
  };

  return {
    state,
    setState: setStateHandle,
    zIndex,
    setZIndex,
  };
}

export function createWindow(
  window: WindowInterface,
  centent: JSX.Element,
): WindowInterface {
  if (!window.children) {
    return {
      ...window,
      children: (
        <WindowComp
          state={window.state}
          setState={window.setState}
          content={centent}
          zIndex={window.zIndex}
        />
      ),
    };
  } else {
    return window;
  }
}

export default function Window({
  state,
  setState,
  content,
  zIndex,
}: WindowProps) {
  const style = {
    width:
      state.minmize || state.close ? 0 : state.maximize ? "100%" : state.width,
    height:
      state.minmize || state.close ? 0 : state.maximize ? "100%" : state.height,
    top: state.close
      ? window.innerHeight / 2
      : state.minmize
        ? window.innerHeight
        : state.maximize
          ? 0
          : state.y,
    left: state.close
      ? window.innerWidth / 2
      : state.minmize
        ? window.innerWidth / 2
        : state.maximize
          ? 0
          : state.x,
    opacity: state.minmize ? "0" : "",
    zIndex: zIndex,
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`absolute bg-[--${theme}-bg-color] rounded-xl backdrop-blur overflow-hidden flex flex-col ${
        state.move || state.resizeEvent?.start
          ? null
          : "transition-[width,height,top,left,opacity]"
      }`}
      style={style}
    >
      <AppBar state={state} setState={setState} />
      <div className="flex-1">{content}</div>
    </div>
  );
}
