import { useEffect, useState } from "react";
import { GitHubAPI, RepoData, RepoLanguages } from "./githubData";
import { VscIssues } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import Progress from "./progress";
import Image from "next/image";
import Link from "next/link";

const GITHUBURL = "https://github.com/";

interface ProjectProps {
  repoFullName: string;
}

export default function Project(props: ProjectProps) {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [repoLanguages, setRepoLanguages] = useState<RepoLanguages | null>(
    null,
  );
  const loading = !repoData || !repoLanguages ? true : undefined;

  useEffect(() => {
    (async () => {
      const repoDataReponse = await GitHubAPI.get<RepoData>(
        `repos/${props.repoFullName}`,
      );
      const repoLanguagesReponse = await GitHubAPI.get(
        `repos/${props.repoFullName}/languages`,
      );
      setRepoData(repoDataReponse.data);
      setRepoLanguages(repoLanguagesReponse.data);
    })();
  }, []);
  const iconInfos = [
    {
      path: "/issues",
      icon: <VscIssues size={18} />,
      data: repoData?.open_issues,
    },
    {
      path: "/stargazers",
      icon: <FaRegStar size={18} />,
      data: repoData?.stargazers_count,
    },
    {
      path: "/forks",
      icon: <FaCodeFork size={18} />,
      data: repoData?.forks,
    },
  ];

  return (
    <div
      className={`flex flex-col p-5 w-full max-w-[500px] rounded-lg mt-10 lg:mt-10 lg:mx-5 select-none card-${
        repoData?.language ?? "Unknown"
      }`}
    >
      <div className="flex items-center">
        <div className="flex-1 mr-10 overflow-hidden">
          <Link href={`${GITHUBURL}${props.repoFullName}`} target="_blank">
            <h2 className="text-2xl loading h-8 rounded-lg truncate">
              {loading ?? props.repoFullName}
            </h2>
            <p className="text-lg loading h-7 rounded-lg truncate">
              {repoData?.description}
            </p>
          </Link>
          <div className="flex mt-10 justify-between">
            {iconInfos.map((iconInfo, index) => (
              <Link
                href={`${GITHUBURL}${props.repoFullName}${iconInfo.path}`}
                target="_blank"
                className="flex items-center loading h-5 w-10 rounded-lg"
                key={index}
              >
                <div className="">{iconInfo.icon}</div>

                <span className="ml-1">{iconInfo.data}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={repoData?.owner.html_url ?? ""}
          target="_blank"
          className="rounded-full overflow-hidden h-24 w-24 loading"
        >
          <Image
            src={repoData?.owner.avatar_url ?? ""}
            width={96}
            height={96}
            alt="Avatar"
          />
        </Link>
      </div>
      <div className="mt-10">
        <Progress {...(repoLanguages ?? {})} />
      </div>
    </div>
  );
}
