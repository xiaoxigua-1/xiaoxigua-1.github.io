export enum WindowResizeEventType {
  LeftTop = "nwse-resize",
  Top = "ns-resize",
  RightTop = "nesw-resize",
  Right = "ew-resize",
  RightBottom = "nwse-resize",
  Bottom = "ns-resize",
  LeftBottom = "nesw-resize",
  Left = "ew-resize",
}

interface WindowResizeEvent {
  type: WindowResizeEventType;
  start: boolean;
}

export default WindowResizeEvent;
