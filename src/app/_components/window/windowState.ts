import WindowResizeEvent from "./windowResizeEvent";

type Separate<T> = {
  [K in keyof T]: { [P in K]: T[P] };
}[keyof T];

interface WindowMoveInitialize {
  x: number;
  y: number;
}

interface WindowState {
  title: string;

  x: number;
  y: number;

  width: number;
  height: number;

  resizeEvent: WindowResizeEvent | null;
  move: WindowMoveInitialize | null;

  minmize: boolean;
  maximize: boolean;
  close: boolean;
}

export default WindowState;
export type WindowStateObj = Separate<WindowState>;
