import WindowState, { WindowStateObj } from "./_components/window/windowState";

interface WindowContainerProps {
  state: WindowState;
  setStates: (...state: WindowStateObj[]) => void;
  children: React.ReactNode;
}

export default function WindowContainer(...container: WindowContainerProps[]) {
  const getState = (index: number) => container[index].state;
  const setState = (index: number, ...state: WindowStateObj[]) =>
    container[index].setStates(...state);
  const childrens = container.map((c) => c.children);

  return { getState, setState, childrens };
}
