"use client";

import { useState } from "react";
import { createWindow, createWindowState } from "./_components/window/window";
import { mouseMoveEffect } from "./_components/window/event";
import Terminal from "./_components/terminal";
import Dock from "./_components/dock/dock";
import { ThemeContext } from "./theme";
import WindowContainer from "./windowContainer";
import { BsTerminal } from "react-icons/bs";

export default function Home() {
  const [theme, _] = useState<"dark" | "light">("dark");
  const [force, setForce] = useState(0);

  const windowContainer = WindowContainer(
    createWindow(
      createWindowState("Terminal", <BsTerminal size={30} />),
      <Terminal />,
    ),
  );
  const onForce = (index: number) => () => {
    if (force === index) return;

    windowContainer.setZIndex(
      index,
      Math.max(...windowContainer.allZIndex) + 1,
    );
    setForce(index);
  };

  mouseMoveEffect(windowContainer);

  return (
    <main className={`text-[--${theme}-text-color]`}>
      <ThemeContext.Provider value={{ theme: theme }}>
        {windowContainer.childrens.map((window, index) => (
          <div key={index} onMouseDown={onForce(index)}>
            {window}
          </div>
        ))}
        <Dock windowContainer={windowContainer} />
      </ThemeContext.Provider>
    </main>
  );
}
