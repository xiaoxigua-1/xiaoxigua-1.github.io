import Project from "./project";

const projects = [
  "xiaoxigua-1/XPixiv",
  "xiaoxigua-1/xiaoxigua-1.github.io",
  "xiaoxigua-1/config",
  "Nat1anWasTaken/Lava",
];

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((fullName, index) => (
        <Project repoFullName={fullName} key={index} />
      ))}
    </div>
  );
}
