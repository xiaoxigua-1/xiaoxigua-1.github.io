import WindowState, { WindowStateObj } from "./windowState";

interface AppBarProps {
  state: WindowState;
  setState: (...state: WindowStateObj[]) => void;
}

export default function AppBar({ state, setState }: AppBarProps) {
  const windowMoveStart = (e: React.MouseEvent) => {
    if (!state.maximize)
      setState({ move: { x: e.clientX - state.x, y: e.clientY - state.y } });
  };

  const windowMoveEnd = () => {
    setState({ move: null });
  };

  return (
    <div className="flex relative p-1 bg-gray-800 rounded-t-xl h-10 items-center select-none">
      <div
        className="w-[calc(100%-16px)] h-8 absolute left-0 mx-2 mt-2 z-10"
        onMouseDown={windowMoveStart}
        onMouseUp={windowMoveEnd}
      />
      <span className="absolute left-1/2 -translate-x-1/2">{state.title}</span>
      <span className="flex-1" />
      <span className="mr-2 flex w-20 justify-between z-20">
        <div
          className="w-5 h-5 rounded-full bg-yellow-400 hover:bg-yellow-400/60 cursor-pointer"
          onClick={() => setState({ minmize: true })}
        />
        <div
          className="w-5 h-5 rounded-full bg-green-400 hover:bg-green-400/60 cursor-pointer"
          onClick={() => setState({ maximize: !state.maximize })}
        />
        <div
          className="w-5 h-5 rounded-full bg-red-400 hover:bg-red-400/60 cursor-pointer"
          onClick={() => setState({ close: true })}
        />
      </span>
    </div>
  );
}
