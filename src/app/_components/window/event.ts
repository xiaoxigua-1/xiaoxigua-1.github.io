import { useEffect } from "react";
import WindowState, { WindowStateObj } from "./windowState";

export function mouseMoveEffect(
  states: WindowState[],
  setStates: ((state: WindowStateObj) => void)[],
) {
  useEffect(() => {
    onmousemove = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      for (const index in states) {
        // Move window event
        if (states[index].move) {
          setStates[index]({
            x: x - states[index].move.x,
            y: y - states[index].move.y,
          });
        }

        // Resize window event
      }
    };
  }, states);
}
