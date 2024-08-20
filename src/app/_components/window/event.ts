import { useEffect } from "react";
import { WindowStateObj } from "./windowState";
import { getCursorStyle, WindowResizeEventType } from "./windowResizeEvent";
import { WindowContainer } from "@/app/windowContainer";

export function mouseMoveEffect(container: WindowContainer) {
  useEffect(() => {
    onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      let isResize = false;

      for (let index = 0; index < container.index; index++) {
        const state = container.getState(index);
        const resizeX = x - (state.resizeEvent?.start?.original[0] || 0);
        const resizeY = y - (state.resizeEvent?.start?.original[1] || 0);
        const data: WindowStateObj[] = [];

        // Check bounds
        const leftBounds = state.x - 8 < x && x < state.x + 8;
        const rightBounds =
          state.x + state.width - 8 < x && x < state.x + state.width + 8;
        const topBounds = state.y - 8 < y && y < state.y + 8;
        const bottomBounds =
          state.y + state.height - 8 < y && y < state.y + state.height + 8;

        const verticalBounds =
          state.y + 8 < y && y < state.y + state.height - 8;
        const horizontalBounds =
          state.x + 8 < x && x < state.x + state.width - 8;

        // Move window event
        if (state.move) {
          data.push({
            x: x - state.move.x,
            y: y - state.move.y,
          });
        }

        // Check resize event type
        const edges = [
          {
            type: WindowResizeEventType.Left,
            condition: leftBounds && verticalBounds,
          },
          {
            type: WindowResizeEventType.Right,
            condition: rightBounds && verticalBounds,
          },
          {
            type: WindowResizeEventType.Top,
            condition: topBounds && horizontalBounds,
          },
          {
            type: WindowResizeEventType.Bottom,
            condition: bottomBounds && horizontalBounds,
          },
          {
            type: WindowResizeEventType.LeftTop,
            condition: leftBounds && topBounds,
          },
          {
            type: WindowResizeEventType.RightTop,
            condition: rightBounds && topBounds,
          },
          {
            type: WindowResizeEventType.RightBottom,
            condition: rightBounds && bottomBounds,
          },
          {
            type: WindowResizeEventType.LeftBottom,
            condition: leftBounds && bottomBounds,
          },
        ];

        if (!state.resizeEvent?.start) {
          data.push({
            resizeEvent: null,
          });

          for (const edge of edges) {
            if (edge.condition) {
              data.push({
                resizeEvent: { type: edge.type, start: null },
              });

              break;
            }
          }
        }

        // set cursor style
        if (state.resizeEvent?.type) {
          isResize = true;
          document.body.style.cursor = getCursorStyle(state.resizeEvent.type);
        }

        // Resize window
        if (state.resizeEvent?.start) {
          // Top resize
          switch (state.resizeEvent?.type) {
            case WindowResizeEventType.Top:
            case WindowResizeEventType.LeftTop:
            case WindowResizeEventType.RightTop:
              if (state.resizeEvent.start.height - resizeY > 600)
                data.push({
                  y: state.resizeEvent.start.original[1] + resizeY,
                  height: state.resizeEvent.start.height - resizeY,
                });
          }

          // Right resize
          switch (state.resizeEvent?.type) {
            case WindowResizeEventType.Right:
            case WindowResizeEventType.RightTop:
            case WindowResizeEventType.RightBottom:
              if (state.resizeEvent.start.width + resizeX > 800)
                data.push({
                  width: state.resizeEvent.start.width + resizeX,
                });
          }

          // Bottom resize
          switch (state.resizeEvent?.type) {
            case WindowResizeEventType.Bottom:
            case WindowResizeEventType.LeftBottom:
            case WindowResizeEventType.RightBottom:
              if (state.resizeEvent.start.height + resizeY > 600)
                data.push({
                  height: state.resizeEvent.start.height + resizeY,
                });
          }

          // Left resize
          switch (state.resizeEvent?.type) {
            case WindowResizeEventType.Left:
            case WindowResizeEventType.LeftTop:
            case WindowResizeEventType.LeftBottom:
              if (state.resizeEvent.start.width - resizeX > 800)
                data.push({
                  x: state.resizeEvent.start.original[0] + resizeX,
                  width: state.resizeEvent.start.width - resizeX,
                });
          }
        }

        // Chage state
        container.setState(index, ...data);
      }

      if (!isResize) document.body.style.cursor = "default";
    };

    // Resize start event
    onmousedown = (event) => {
      for (let index = 0; index < container.index; index++) {
        const state = container.getState(index);
        if (state.resizeEvent)
          container.setState(index, {
            resizeEvent: {
              type: state.resizeEvent.type,
              start: {
                width: state.width,
                height: state.height,
                original: [event.clientX, event.clientY],
              },
            },
          });
      }
    };

    // Resize end event
    onmouseup = () => {
      for (let index = 0; index < container.index; index++) {
        const state = container.getState(index);
        if (state.resizeEvent)
          container.setState(index, {
            resizeEvent: { type: state.resizeEvent.type, start: null },
          });
      }
    };
  }, container.allStates);
}
