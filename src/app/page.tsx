"use client";

import Window, { createWindowState } from "./_components/window/window";
import { mouseMoveEffect } from "./_components/window/event";
import Terminal from "./_components/terminal";
import Dock from "./_components/dock/dock";

export default function Home() {
  const [windowState, setWindowState] = createWindowState("xiaoxigua");

  mouseMoveEffect([windowState], [setWindowState]);

  return (
    <main>
      <Window
        state={windowState}
        setState={setWindowState}
        content={<Terminal />}
      />
      <Dock />
    </main>
  );
}
