"use client";

import { useState } from "react";
import Window, { createWindowState } from "./_components/window/window";
import { mouseMoveEffect } from "./_components/window/event";
import Terminal from "./_components/terminal";
import Dock from "./_components/dock/dock";
import { ThemeContext } from "./theme";

export default function Home() {
  const [windowState, setWindowState] = createWindowState("xiaoxigua");
  const [theme, _] = useState<"dark" | "light">("dark");

  mouseMoveEffect([windowState], [setWindowState]);

  return (
    <main className={`text-[--${theme}-text-color]`}>
      <ThemeContext.Provider value={{ theme: theme }}>
        <Window
          state={windowState}
          setState={setWindowState}
          content={<Terminal />}
        />
        <Dock
          states={[windowState, windowState]}
          setStates={[setWindowState]}
        />
      </ThemeContext.Provider>
    </main>
  );
}
