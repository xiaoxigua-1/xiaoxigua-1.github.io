export default function Dock() {
  const items = [0, 1, 2, 3, 4];

  return (
    <div className="group w-80 h-80 absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="w-20 h-20 group-hover:w-32 group-hover:h-32 rounded-full bg-[#242b39bb] opacity-50 group-hover:opacity-90 transition-[width,height,opacity]">
        {items.map((_, index) => (
          <div
            key={index}
            style={
              {
                "--index": index,
              } as React.CSSProperties
            }
            className="w-20 h-20 bg-white rounded-full absolute top-1/4 left-0 rotate-0 group-hover:rotate-[calc(var(--index)*45deg)] group-hover:origin-[160px] origin-center opacity-0 group-hover:opacity-100 transition-all delay-[calc(var(--index)*0.1s)] duration-100 translate-x-[100px] group-hover:translate-x-0"
          />
        ))}
      </div>
    </div>
  );
}
