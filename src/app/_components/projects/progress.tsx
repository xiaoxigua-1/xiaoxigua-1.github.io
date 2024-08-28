import { RepoLanguages } from "./githubData";

export default function Progress(languagers: RepoLanguages) {
  const total = Object.values(languagers).reduce((a, b) => a + b, 0);
  const languagesCount = Object.keys(languagers).length;

  return (
    <div className="w-full rounded-lg h-2 flex loading items-center">
      {Object.entries(languagers).map(([language, count], index) => (
        <div
          key={index}
          className={`h-2 progress-${language} ${
            index === 0 ? "rounded-l-lg" : ""
          } ${index === languagesCount - 1 ? "rounded-r-lg" : ""}`}
          style={{ width: `${(count / total) * 100}%` }}
        />
      ))}
    </div>
  );
}
