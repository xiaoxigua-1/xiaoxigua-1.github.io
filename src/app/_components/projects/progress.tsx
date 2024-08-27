import { RepoLanguages } from "./githubData";

export default function Progress(languagers: RepoLanguages) {
  const total = Object.values(languagers).reduce((a, b) => a + b, 0);

  return (
    <div className="w-full rounded-lg h-2 flex overflow-hidden loading">
      {Object.entries(languagers).map(([language, count]) => (
        <div
          key={language}
          className={`h-2 progress-${language}`}
          style={{ width: `${(count / total) * 100}%` }}
        />
      ))}
    </div>
  );
}
