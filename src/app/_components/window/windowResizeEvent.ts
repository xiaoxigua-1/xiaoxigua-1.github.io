export enum WindowResizeEventType {
  LeftTop,
  Top,
  RightTop,
  Right,
  RightBottom,
  Bottom,
  LeftBottom,
  Left,
}

export function getCursorStyle(type?: WindowResizeEventType): string {
  switch (type) {
    case WindowResizeEventType.LeftTop:
    case WindowResizeEventType.RightBottom:
      return "nwse-resize";
    case WindowResizeEventType.Top:
    case WindowResizeEventType.Bottom:
      return "ns-resize";
    case WindowResizeEventType.RightTop:
    case WindowResizeEventType.LeftBottom:
      return "nesw-resize";
    case WindowResizeEventType.Right:
    case WindowResizeEventType.Left:
      return "ew-resize";
    default:
      return "";
  }
}

interface WindowResizeEvent {
  type: WindowResizeEventType;
  start: {
    width: number;
    height: number;
    original: [number, number];
  } | null;
}

export default WindowResizeEvent;
