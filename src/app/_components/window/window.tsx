import { useState } from "react";
import AppBar from "./appBar";
import WindowState, { WindowStateObj } from "./windowState";

interface WindowProps {
  state: WindowState;
  setState: (...obj: WindowStateObj[]) => void;
}

export function createWindowState(
  title: string,
  width: number = 800,
  height: number = 600,
  x: number = window.innerWidth / 2 - 400,
  y: number = window.innerHeight / 2 - 300,
): [WindowState, (...obj: WindowStateObj[]) => void] {
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

  return [state, setStateHandle];
}

export default function Window({ state, setState }: WindowProps) {
  return (
    <div
      className={`absolute bg-blue-500/50 rounded-xl backdrop-blur ${
        state.move || state.resizeEvent
          ? null
          : "transition-[width,height,top,left]"
      }`}
      style={{
        width: state.maximize ? "100%" : state.width,
        height: state.maximize ? "100%" : state.height,
        top: state.maximize ? 0 : state.y,
        left: state.maximize ? 0 : state.x,
      }}
    >
      <AppBar state={state} setState={setState} />
    </div>
  );
}
