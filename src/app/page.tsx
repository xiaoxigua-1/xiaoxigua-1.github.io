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

  const windowContainer = WindowContainer(
    createWindow(
      createWindowState("Terminal", <BsTerminal size={30} />),
      <Terminal />,
    ),
  );

  mouseMoveEffect(windowContainer);

  return (
    <main className={`text-[--${theme}-text-color]`}>
      <ThemeContext.Provider value={{ theme: theme }}>
        {windowContainer.childrens.map((window, index) => (
          <div key={index}>{window}</div>
        ))}
        <Dock windowContainer={windowContainer} />
      </ThemeContext.Provider>
    </main>
  );
}
