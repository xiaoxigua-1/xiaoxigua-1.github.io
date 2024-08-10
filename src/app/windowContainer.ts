import WindowState, { WindowStateObj } from "./_components/window/windowState";

interface WindowContainerProps {
  state: WindowState;
  setState: (...state: WindowStateObj[]) => void;
  children?: JSX.Element;
}

export interface WindowContainer {
  getState: (index: number) => WindowState;
  setState: (index: number, ...state: WindowStateObj[]) => void;
  allStates: WindowState[];
  childrens: (JSX.Element | undefined)[];
  index: number;
}

export default function WindowContainer(
  ...container: WindowContainerProps[]
): WindowContainer {
  const getState = (index: number) => container[index].state;
  const setState = (index: number, ...state: WindowStateObj[]) =>
    container[index].setState(...state);
  const childrens = container.map((c) => c.children);

  return {
    getState,
    setState,
    childrens,
    index: container.length,
    allStates: container.map((c) => c.state),
  };
}
