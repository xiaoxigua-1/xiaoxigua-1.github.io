import { useEffect } from "react";
import WindowState, { WindowStateObj } from "./_components/window/windowState";
import { WindowInterface } from "./_components/window/window";

export interface WindowContainer {
  getState: (index: number) => WindowState;
  setState: (index: number, ...state: WindowStateObj[]) => void;
  allStates: WindowState[];
  childrens: (JSX.Element | undefined)[];
  index: number;
  setZIndex: (index: number, num: number) => void;
  allZIndex: number[];
}

export default function WindowContainer(
  ...container: WindowInterface[]
): WindowContainer {
  const getState = (index: number) => container[index].state;
  const setState = (index: number, ...state: WindowStateObj[]) =>
    container[index].setState(...state);
  const childrens = container.map((c) => c.children);

  useEffect(() => {
    container.forEach((w, index) => w.setZIndex(index));
  }, []);

  return {
    getState,
    setState,
    childrens,
    index: container.length,
    allStates: container.map((c) => c.state),
    setZIndex: (index: number, num: number) => container[index].setZIndex(num),
    allZIndex: container.map((c) => c.zIndex),
  };
}
