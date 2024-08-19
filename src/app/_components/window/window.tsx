import { useContext, useState } from "react";
import AppBar from "./appBar";
import WindowState, { WindowStateObj } from "./windowState";
import { ThemeContext } from "@/app/theme";

interface WindowProps {
  state: WindowState;
  setState: (...obj: WindowStateObj[]) => void;
  content?: JSX.Element;
}

interface Window {
  state: WindowState;
  setState: (...obj: WindowStateObj[]) => void;
  children?: JSX.Element;
}

export function createWindowState(
  title: string,
  icon?: JSX.Element,
  width: number = 800,
  height: number = 600,
  x: number = window.innerWidth / 2 - 400,
  y: number = window.innerHeight / 2 - 300,
): Window {
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
  const setStateHandle = (...obj: WindowStateObj[]) => {
    setState(Object.assign({ ...state }, ...obj));
  };

  return {
    state,
    setState: setStateHandle,
  };
}

export function createWindow(window: Window, centent: JSX.Element): Window {
  if (!window.children) {
    return {
      ...window,
      children: (
        <Window
          state={window.state}
          setState={window.setState}
          content={centent}
        />
      ),
    };
  } else {
    return window;
  }
}

export default function Window({ state, setState, content }: WindowProps) {
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
