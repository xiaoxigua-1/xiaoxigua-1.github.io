import { useState } from "react";
import AppBar from "./appBar";
import WindowState, { WindowStateObj } from "./windowState";

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
  width: number = 800,
  height: number = 600,
  x: number = window.innerWidth / 2 - 400,
  y: number = window.innerHeight / 2 - 300,
): Window {
  const [state, setState] = useState<WindowState>({
    title,
    x,
    y,
    width,
    height,
    resizeEvent: null,
    move: null,
    minmize: false,
    maximize: false,
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
    width: state.maximize ? "100%" : state.minmize ? 0 : state.width,
    height: state.maximize ? "100%" : state.minmize ? 0 : state.height,
    top: state.maximize ? 0 : state.minmize ? window.innerHeight : state.y,
    left: state.maximize ? 0 : state.minmize ? window.innerWidth / 2 : state.x,
    opacity: state.minmize ? "0" : "",
  };

  return (
    <div
      className={`absolute bg-blue-500/50 rounded-xl backdrop-blur overflow-hidden flex flex-col ${
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
