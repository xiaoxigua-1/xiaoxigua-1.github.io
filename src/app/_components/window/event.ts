import { useEffect } from "react";
import WindowState, { WindowStateObj } from "./windowState";
import { WindowResizeEventType } from "./windowResizeEvent";

export function mouseMoveEffect(
  states: WindowState[],
  setStates: ((...state: WindowStateObj[]) => void)[],
) {
  useEffect(() => {
    onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      for (const index in states) {
        const state = states[index];
        const data: WindowStateObj[] = [];

        // Move window event
        if (state.move) {
          data.push({
            x: x - state.move.x,
            y: y - state.move.y,
          });
        }

        // Change User cursor
        if (
          // Left
          state.x - 8 < x &&
          x < state.x + 8 &&
          state.y + 8 < y &&
          y < state.y + state.height - 8
        ) {
          data.push({
            resizeEvent: { type: WindowResizeEventType.Left, start: false },
          });
        } else if (
          // Right
          state.x + state.width - 8 < x &&
          x < state.x + state.width + 8 &&
          state.y + 8 < y &&
          y < state.y + state.height - 8
        ) {
          data.push({
            resizeEvent: { type: WindowResizeEventType.Right, start: false },
          });
        } else if (
          // Top
          state.y - 8 < y &&
          y < state.y + 8 &&
          state.x + 8 < x &&
          x < state.x + state.width - 8
        ) {
          data.push({
            resizeEvent: { type: WindowResizeEventType.Top, start: false },
          });
        } else if (
          // Bottom
          state.y + state.height - 8 < y &&
          y < state.y + state.height + 8 &&
          state.x + 8 < x &&
          x < state.x + state.width - 8
        ) {
          data.push({
            resizeEvent: { type: WindowResizeEventType.Bottom, start: false },
          });
        } else if (!state.resizeEvent?.start) {
          data.push({
            resizeEvent: null,
          });
        }

        document.body.style.cursor = state.resizeEvent?.type ?? "default";

        // Resize window event

        // Chage state
        setStates[index](...data);
      }
    };
  }, states);
}
