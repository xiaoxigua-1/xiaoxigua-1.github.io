"use client";

import { useState } from "react";
import { createWindow, useWindowState } from "./_components/window/window";
import { useMouseMoveEffect } from "./_components/window/event";
import Terminal from "./_components/terminal";
import Dock from "./_components/dock/dock";
import { ThemeContext } from "./theme";
import WindowContainer from "./windowContainer";
import { BsTerminal } from "react-icons/bs";
import Projects from "./_components/projects/projects";
import { FaDiagramProject } from "react-icons/fa6";

export default function Home() {
  const [theme, _] = useState<"dark" | "light">("dark");
  const [force, setForce] = useState(0);

  const windowContainer = WindowContainer(
    createWindow(
      useWindowState("Terminal", <BsTerminal size={30} />),
      <Terminal />,
    ),
    createWindow(
      useWindowState(
        "Projects",
        <FaDiagramProject size={30} />,
        undefined,
        undefined,
        undefined,
        undefined,
        true,
      ),
      <Projects />,
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

  useMouseMoveEffect(windowContainer);

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
