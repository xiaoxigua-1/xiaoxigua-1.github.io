"use client";

import Window, { createWindowState } from "./_components/window/window";
import { mouseMoveEffect } from "./_components/window/event";

export default function Home() {
  const [windowState, setWindowState] = createWindowState("xiaoxigua");

  mouseMoveEffect([windowState], [setWindowState]);

  return (
    <main>
      <Window state={windowState} setState={setWindowState} />
    </main>
  );
}
